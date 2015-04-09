/**
 * author: soldier·G
 * create-date: 下午10:08:50
 * comment: <file description>
 */
package com.eno.web.note.handler;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Map;
import java.util.stream.Stream;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.io.FileUtils;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.eno.web.note.module.entity.MapResult;
import com.eno.web.note.service.connector.IService;
import com.eno.web.note.util.SpringContextUtil;

/**
 * @author soldier·G 下午10:08:50
 *
 *         此类用于json交互,默认map:params中必须有servicename这个键值对
 */
@Controller
@RequestMapping("/handler")
public class HandlerCore {

	@RequestMapping(value = "/json", produces = "application/json")
	public @ResponseBody Map<String, Object> jsonHandler(
			@RequestParam Map<String, String> params) {
		String serviceName = null;
		if (null == params) {
			return MapResult.getMapResultFailed("params is null ");
		}

		serviceName = params.get(MapResult.MAP_SERVICE_NAME);
		if (null == serviceName || "".equals(serviceName)) {
			return MapResult.getMapResultFailed("servicename is null");
		}
		params.remove(MapResult.MAP_SERVICE_NAME);
		IService ihs = null;
		try {
			ihs = (IService) SpringContextUtil.getBean(serviceName);
		} catch (Exception e) {
			return MapResult.getMapResultFailed(e.toString());
		}
		return ihs.execute(params);
	}

	/**
	 * 文件上传(支持多文件)
	 * 
	 * @param file
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/upload", produces = "application/json")
	public @ResponseBody Map<String, Object> uploadHandler(
			@RequestParam(value = "file", required = false) MultipartFile[] files,
			@RequestParam(value = "path", required = false) String fileDir,
			HttpServletRequest request) {
		System.out.println(fileDir);
		String path = "G:/download";
		File targetDir = new File(path);
		if (!targetDir.exists()) {
			targetDir.mkdirs();
		}
		for (MultipartFile file : files) {
			try {
				file.transferTo(new File(path, file.getOriginalFilename()));
			} catch (IllegalStateException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			}
			;
		}
		return MapResult.getMapResultSuccess("success");

	}

	/**
	 * 文件下载
	 * @throws IOException 
	 */
	@RequestMapping(value = "/download")
	public ResponseEntity<byte[]> download() throws IOException{
		
		String fileName = "G:/download/test.txt";
		File file = new File(fileName);
		
		HttpHeaders headers = new HttpHeaders();  
		 headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);  
		    headers.setContentDispositionFormData("attachment", file.getName());  
		return new ResponseEntity<byte[]>(FileUtils.readFileToByteArray(file),   headers, HttpStatus.CREATED);
	}
	
 
}
