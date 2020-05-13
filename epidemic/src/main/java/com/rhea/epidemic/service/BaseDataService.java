package com.rhea.epidemic.service;

import com.rhea.epidemic.domain.DataBean;

import java.util.List;

/**
 * @author Administrator Rhea
 * 疫情数据service接口
 */
public interface BaseDataService {
    /**
     * 获取响应信息
     * @return 返回集合信息
     */
    List<DataBean> getInfo();
}
