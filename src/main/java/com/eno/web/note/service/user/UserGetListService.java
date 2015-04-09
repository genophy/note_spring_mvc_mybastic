/**
 * author: soldier·G
 * create-date: 下午10:42:25
 * comment: <file description>
 */
package com.eno.web.note.service.user;

import java.util.Map;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import com.eno.web.note.dao.UserDao;
import com.eno.web.note.module.entity.MapResult;
import com.eno.web.note.service.connector.IService;

/**
 * @author soldier·G 下午10:42:25
 *
 */
@Service(value="usergetlist")
public class UserGetListService implements IService{
	@Inject
	private UserDao dao;
	@Override
	public Map<String, Object> execute(Map<String, String> params) {
		return  MapResult.getMapResultSuccess(dao.getList());
	}

}
