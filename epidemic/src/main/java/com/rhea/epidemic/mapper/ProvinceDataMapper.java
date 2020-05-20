package com.rhea.epidemic.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.rhea.epidemic.domain.ProvinceData;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.type.JdbcType;

import java.util.List;
import java.util.Map;

/**
 * @author Administrator Rhea
 */
@Mapper
public interface ProvinceDataMapper extends BaseMapper<ProvinceData> {
    /**
     * 查询境外输入省市
     * @return 集合 map<name省市名字，confirm人数>
     */
    @Results({
            @Result(column="name", property="name", jdbcType= JdbcType.INTEGER),
            @Result(column="import", property="confirm", jdbcType= JdbcType.INTEGER)
    })
    @Select("SELECT P.name AS name,C.confirm AS import FROM(SELECT C.confirm ,C.province_id FROM cityData C WHERE C.name = '境外输入' ORDER BY C.confirm DESC LIMIT 10) C INNER JOIN provinceData P ON C.province_id = P.id;")
    List<ProvinceData> selectImportProvinceList();
}
