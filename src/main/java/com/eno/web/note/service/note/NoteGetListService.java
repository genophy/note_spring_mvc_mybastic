/**
 * author: soldier·G
 * create-date: 下午10:35:13
 * comment: <file description>
 */
package com.eno.web.note.service.note;

import java.util.Map;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import com.eno.web.note.dao.NoteDao;
import com.eno.web.note.module.entity.MapResult;
import com.eno.web.note.service.connector.IService;

/**
 * @author soldier·G 下午10:35:13
 *
 */
@Service(value="notegetlist")
public class NoteGetListService implements IService {
	@Inject
	private NoteDao dao;
	

	@Override
	public Map<String, Object> execute(Map<String, String> params) {
		return MapResult.getMapResultSuccess(dao.getList());
	}

}
