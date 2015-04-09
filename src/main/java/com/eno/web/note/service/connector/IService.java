/**
 * author: soldier·G
 * create-date: 上午2:07:12
 * comment: <file description>
 */
package com.eno.web.note.service.connector;

import java.util.Map;

/**
 * @author soldier·G 上午2:07:12
 *
 *         handler服务
 */
public interface IService {
	public Map<String, Object> execute(Map<String, String> params);
}
