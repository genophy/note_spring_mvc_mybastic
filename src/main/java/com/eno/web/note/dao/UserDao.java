/**
 * author: soldier·G
 * create-date: 下午10:43:33
 * comment: <file description>
 */
package com.eno.web.note.dao;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Repository;

import com.eno.web.note.mapper.two.UserMapper;
import com.eno.web.note.module.db.User;

/**
 * @author soldier·G 下午10:43:33
 *
 */
@Repository
public class UserDao {
	@Inject
	private UserMapper mapper;
	
	public List<User> getList(){
		return mapper.getList();
	}
}
