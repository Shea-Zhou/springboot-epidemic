package com.rhea.epidemic.domain;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author Administrator
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@TableName("totalData")
public class TotalData {
    private String lastUpdateTime;
    protected int confirm;
    protected int heal;
    protected int dead;
    protected int nowConfirm;
    protected int suspect;
    protected int nowSevere;
    protected int importedCase;
    protected int noInfect;
    protected int addConfirm;
    protected int addHeal;
    protected int addDead;
    protected int addNowConfirm;
    protected int addSuspect;
    protected int addNowSevere;
    protected int addImportedCase;
    protected int addNoInfect;
}
