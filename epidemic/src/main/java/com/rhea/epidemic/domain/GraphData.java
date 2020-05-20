package com.rhea.epidemic.domain;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.*;

/**
 * @author Administrator Rhea
 */
@Getter
@Setter
@AllArgsConstructor@NoArgsConstructor
@TableName("graphData")
public class GraphData {
    private int id;
    private String date;
    private int nowConfirm;
    private int newConfirm;
    private int nowSuspect;
    private int newSuspect;
    private int nowSevere;
    private int grossConfirm;
    private int grossHeal;
    private int grossDead;
    private String deadRate;
    private String healRate;
    private int grossImportCase;
    private int newImportCase;
    private int noInfect;
    private int gat;
    private int importCase;
    private int province;

}
