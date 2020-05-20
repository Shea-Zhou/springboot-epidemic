package com.rhea.epidemic.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.rhea.epidemic.domain.ProvinceData;
import com.rhea.epidemic.domain.GraphData;

import java.util.List;
import java.util.Map;

/**
 * @author Administrator Rhea
 * 疫情数据service接口
 */
public interface BaseProvinceDataService extends IService<ProvinceData> {
    /**
     * 获取图表数据
     * @return 图表数据
     */
    List<GraphData> getInfo();
//    /**
//     * 获取响应信息
//     * @return 返回集合信息
//     */
//    void initialInfo(String id);
    /**
     * 查询境外输入省市
     * @return 集合 map<name省市名字，confirm人数>
     */
    List<ProvinceData> selectImportProvinceList();
}
