package com.rhea.epidemic.service;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.rhea.epidemic.domain.ProvinceData;
import com.rhea.epidemic.domain.GraphData;
import com.rhea.epidemic.handler.GraphHandler;
import com.rhea.epidemic.mapper.ProvinceDataMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Administrator Rhea
 * service实现类
 */
@Service
public class ProvinceDataServiceImpl extends ServiceImpl<ProvinceDataMapper, ProvinceData>implements BaseProvinceDataService {
    @Autowired
    private ProvinceDataMapper mapperP;
    @Override
    public List<GraphData> getInfo() {
        return GraphHandler.getData();
    }

    @Override
    public List<ProvinceData> selectImportProvinceList() {
        return mapperP.selectImportProvinceList();
    }
//    @Override
//    public void initialInfo(String id) {
//        saveAndUpdateData.saveData(id);
//    }
}
