/**
 * author: soldier·G
 * create-date: 下午10:25:07
 * comment: <file description>
 */
package com.eno.web.note.module.entity;

import java.util.HashMap;
import java.util.Map;

/**
 * @author soldier·G 下午10:25:07
 *
 *         返回的map结果封装
 */
public class MapResult {

	public static final String MAP_SERVICE_NAME = "servicename";

	public static final String MAP_STATUS = "success_flag";
	public static final String MAP_RESULT = "content";

	public static final String MAP_SUCCESS = "success";
	public static final String MAP_FAILED = "failed";

	/**
	 * 获取失败的信息,仅仅警告字符串
	 * 
	 * @param exception
	 * @return
	 */
	public static Map<String, Object> getMapResultFailed(String exception_str) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put(MAP_STATUS, MAP_FAILED);
		map.put(MAP_RESULT, exception_str);
		return map;
	}
	
	/**
	 * 获取失败的信息
	 * 
	 * @param exception
	 * @return
	 */
	public static Map<String, Object> getMapResultFailed(Object failed_result) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put(MAP_STATUS, MAP_FAILED);
		map.put(MAP_RESULT, failed_result);
		return map;
	}


	/**
	 * 获取成功的传入信息
	 * 
	 * @param result
	 * @return
	 */
	public static Map<String, Object> getMapResultSuccess(Object success_result) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put(MAP_STATUS, MAP_SUCCESS);
		map.put(MAP_RESULT, success_result);
		return map;
	}
}
