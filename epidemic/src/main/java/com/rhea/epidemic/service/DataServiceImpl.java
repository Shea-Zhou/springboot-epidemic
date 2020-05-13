package com.rhea.epidemic.service;

import com.rhea.epidemic.domain.DataBean;
import com.rhea.epidemic.util.DataHandler;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Administrator Rhea
 * service实现类
 */
@Service
public class DataServiceImpl implements BaseDataService {
    @Override
    public List<DataBean> getInfo() {
        List<DataBean> dataBeanList = null;
        try {
            dataBeanList = DataHandler.getData();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return dataBeanList;
    }
}
