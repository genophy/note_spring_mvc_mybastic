/**
 * author: soldier·G
 * create-date: 下午10:06:25
 * comment: <file description>
 */
package com.eno.web.note.dao;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Repository;

import com.eno.web.note.mapper.one.NoteMapper;
import com.eno.web.note.module.db.Note;

/**
 * @author soldier·G 下午10:06:25
 *
 */
@Repository
public class NoteDao  {
	@Inject
	private NoteMapper mapper;
	
	
	public List<Note> getList() {
		return mapper.getList();
	}
}
