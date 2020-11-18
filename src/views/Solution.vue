<template>
    <div id="center">
        <div id="banner"></div>
        <div id="center-container">
            <el-tabs
                    :tab-position="tabPosition"
                    v-model="activeTabName"
                    style="height:auto;min-height: 510px">
                <el-tab-pane label="智能工作协同" name="tab1">
                    <div class="right-wrap" id="tab1">
                        <article>
                            C8ERP为企业提供了强大的协同工作解决方案，全面支持各类业务单据的流程自定义和审核规则自定义，从而让业务数据在各职能部门和人员之间高效流转，配合智能审批规则和消息通知，实现业务管理的规范化、无纸化、实时化，进而明确岗位职责、防止管理漏洞、提升企业整体运营效率！
                        </article>
                        <img src="../assets/images/solution_01.jpg" alt="销售开单工作流">
                        <small>销售开单工作流</small>

                        <img src="../assets/images/solution_02.jpg" alt="付款申请工作流">
                        <small>付款申请工作流</small>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="电商管理" name="tab2">
                    <div class="right-wrap" id="tab2">
                        <article>
                            针对电商业务，C8ERP可提供从平台订单同步，到客审、财审，再到仓库发货，账单收款及售后的专业解决方案。同时与线下供应链、仓储和财务核算有效整合，实现一体化管理。有效避免IT系统的重复投入（如电商、进销存和财务分别采用不同系统）、降低人员成本、提高工作效率。
                            已支持主流电商平台包括：天猫、淘宝、京东、苏宁、拼多多（在建）、有赞、微店、小红书（在建）、唯品会（在建）……
                        </article>
                        <img src="../assets/images/solution_03.jpg" alt="智能订单审核  ->  高效订单发货  ->  收款退款售后">
                        <small>智能订单审核 -> 高效订单发货 -> 收款退款售后</small>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="传统供应链" name="tab3">
                    <div class="right-wrap" id="tab3">
                        <article>
                            关键词：合作伙伴管理、进销存业务协同、权限管理、往来信控、按单核销、多纬度数据统计
                            合作伙伴档案管理
                            可为供应链上下游的合作伙伴（供应商和客户）建立完整的档案信息；
                        </article>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="财务一体化" name="tab4">
                    <div class="right-wrap" id="tab4">
                        <article>
                            C8ERP在设计之初，就力求以现代商业企业的整体管理视角，为企业提供一套完整的“业务+财务”的一体化管理解决方案。即能满足企业业务部门“全面、精细、灵活”的业务管理需要，又为财务部门提供了“规范、严谨、标准”的会计核算功能。此外，为了提高软件的易用性，我们重新梳理传统业务软件和财务软件中的各类业务逻辑，简化一些不必要的环节，让工作更便捷、更轻松！
                        </article>
                        <img src="../assets/images/solution_04.jpg" alt="C8ERP的一体化财务流程">
                        <small>C8ERP的一体化财务流程</small>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="AG自动化退款" name="tab5">
                    <div class="right-wrap" id="tab5">
                        <article>
                            <h2>一、价值说明：</h2>
                            <h3>现状痛点：</h3>
                            <p><b>在AG与C8ERP打通之前，做为商家的我们常常会遇到这样的场景：</b></p>
                            <p><b>场景1：</b>顾客申请未发货仅退款，我们的客服人员在C8ERP看到拦截成功之后，到AG页面（或者是商家后台）手动操作退款。</p>
                            <p><b>场景2：</b>顾客申请退货退款，将货物寄回后，我们的客服人员会定期在C8ERP中查看目前已经退货入仓的退款，之后在到AG页面（或者是商家后台）手动操作退款。</p>
                            <p><b>痛点：</b>针对上述两个场景我们的客服人员一般是定时到C8ERP系统查看是否已经拦截发货成功或者退货入仓成功，之后客服在AG（或者商家后台）要手工一笔笔操作，这样会影响退款时长，而且耗费人力（特别是大促期间）</p>
                            <h3>解决方案：</h3>
                            <p>AG和C8ERP联合提供了一套系统自动处理退款的方案。C8ERP与千牛售后服务（AG）进行系统对接，轻松实现商品“取消发货”，“退货入仓”信息与AG协同，实现退款任务自动化处理。
                            <p><b>（1）未发货仅退款场景：</b>顾客申请未发货仅退款，C8ERP自动拦截发货，拦截成功后，由客服直接确认并通过接口告知AG取消发货成功信息，AG将退款的“发货出仓”状态标记成取消发货成功，这个时候如果设置了依赖于erp取消发货成功信息的自动退款策略，系统就会自动处理这笔退款系统自动处理退款流程如下：</p>

                            <img src="../assets/images/solution_ag_01.png" alt="未发货仅退款场景">
                            <p><b>（2）退货退款场景：</b>顾客申请退货退款，将货物寄回后，C8ERP按照设置的规则监测到货物经退回入仓后，由客服确认后通过接口告知AG已经退货入仓信息，AG将退款的“退货入仓”状态标记成已入仓，这个时候如果设置了依赖于erp已退货入仓信息的自动退款策略，系统就会自动处理这笔退款。
                                退货退款场景系统自动处理退款流程如下：</p>
                            <img src="../assets/images/solution_ag_02.png" alt="退货退款场景">
                            <h2>二、如何对接？</h2>
                            <h4>第1步：在千牛售后服务（AG）中配置“取消发货”和“退货入仓”自动退款策略</h4>
                            <p>具体如何设置请<a href="https://www.yuque.com/aligenius/help/wndtet#r3qqvf">点此查看</a></p>
                            <h4>第2步：联系C8ERP客服，进行传AG接口信息的相关配置</h4>
                            <p>开通时，可选择自动退款模式和手动退款模式，对于客单价较高的店铺，建议采取手动退款模式——即退款的审核由人工触发；</p>
                            <h4>第3步： 为负责退款的操作人员开通退款权限</h4>
                            <p>通过【系统管理】-【权限管理】-【其他】-【淘宝助手】-【退款管理】，如图：</p>
                            <img src="../assets/images/solution_ag_03.png">
                            <h4>第4步：手动模式和自动模式介绍</h4>

                            <b>2.4.1 手动模式下，退款操作人员在系统中进入【淘宝助手】-【退款管理】页面，进行退款审核；</b>
                            <p>在此可查询所有退款记录（根据退款消息自动创建），点击某笔退款申请，下方【关联单据详情】和【售后记录】中会显示该笔退款申请对应的订单当前在C8ERP中的处理进度；如图：</p>
                            <img src="../assets/images/solution_ag_04.png">
                            <p>如相关记录为空（如上图），则表示【系统未接单】——即订单尚未导入系统；如存在销售单记录（如下图），则表示【系统已接单】，出库单已进入客审或打印发货处理环节，此时系统会自动对相关单据进行拦截锁定；</p>
                            <img src="../assets/images/solution_ag_05.png">
                            <b>2.4.2 审核退款，退款操作人员可直接点击【操作】-【审核】进行退款申请的审核，如图：</b>
                            <img src="../assets/images/solution_ag_06.png">
                            <p>【退款单审核】窗口上方显示退款商品当前的系统处理进度，退款操作人员可依据系统给出的提示完成相应操作，如删除出库单，然后点击【取消发货】，由AG完成退款；为避免误操作造成损失，只有严格匹配系统的【取消发货】和【确认收货】状态，系统才允许操作，否则按钮将处于不可操作状态；比如，退款申请对应的出库单尚未删除，则【取消发货】按钮将不可操作，如下图所示；</p>
                            <img src="../assets/images/solution_ag_07.png">
                            <b>2.4.3 自动审核模式</b>
                            <p>为提升退款审核的效率，在开通AG对接功能时，也可以选择自动审核模式。如采用自动审核模式，则系统在接到买家退款申请时，根据退款订单在系统中的处理进度和后续操作自动完成退款审核，具体包括： 状态一、系统未接单（未导入），则自动完成【取消发货】处理； 状态二、系统已接单（已导入），未系统出库，则在删除出库单时自动完成【取消发货】处理； 状态三、系统已接单（已导入），已系统出库，则在执行对应系统入库（退货入库）时自动完成【取消发货】处理； 状态四、系统已发货，申请退款退货，则应走售后退货流程，并在执行售后退货单时自动完成【退货入仓】处理；</p>
                            <h2>三、FAQ</h2>
                            <h4>Q1、在AG中设置自动退款策略时需要填写APPKEY，这个APPKEY是什么？（问题图示如下）</h4>
                            <img src="../assets/images/solution_ag_08.png">
                            <p>A1:appkey是23198211</p>
                            <h4>Q2.AG自动处理的退款在哪里查看？</h4>
                            <p>A2：<a href="https://h5.m.taobao.com/qn/pc/niuba-feeds.html#/detail/10397292?_k=d4j90u">点此查看</a></p>
                            <h4>Q3.对接后AG不自动处理退款，如何解决？</h4>
                            <p>A3：<a href="https://www.yuque.com/aligenius/help/kazo2s">https://www.yuque.com/aligenius/help/kazo2s</a></p>
                            <h2>若您仍有疑问，可以钉钉联系我们的专属对接人员，钉钉号：x7lv77o</h2>
                        </article>

                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    export default {
        name: "solution",
        metaInfo: {
            title: '威创|解决方案',
            meta: [
                {
                    name: 'keywords',
                    content: '解决方案, c8erp, wms，solution'
                }
            ]
        },
        watch: {
            '$route': {
                handler(cur, old) {
                    let curIndex = (cur.query && cur.query.tabIndex) || 1
                    this.activeTabName = `tab${curIndex}`
                },
                immediate: true
            }
        },
        data() {
            return {
                activeTabName: '',
                tabPosition: 'left',
            }
        }
    }
</script>

<style scoped lang="less">
    #center-container {

        width: 80%;
        max-width: 1100px;
        margin: 60px  auto 0 auto;
        .right-wrap {
            padding: 20px 30px;
            text-indent: 2em;
            line-height: 1.8;
            article {
                padding: 0 20px;
            }
            img {
                width: 800px;
                display: block;
                margin: 10px auto;
            }
            small {
                text-align: center;
                display: block;
                width: 100%;
            }
        }
    }
</style>
