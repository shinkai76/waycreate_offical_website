<template>
    <el-dialog
            title="申请试用"
            :visible.sync="dialogVisible"
            :fullscreen="fullscreen"
            :close-on-press-escape="false"
            :before-close="onClose">
        <el-form :model="form"
                 :size="size"
                 id="apply-warp">
            <el-row >
                <el-col :span="12">
                    <el-form-item :required="required" label="姓名" :label-width="formLabelWidth">
                        <el-input v-model.trim="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item :required="required" label="手机" :label-width="formLabelWidth">
                        <el-input v-model.trim="form.mobile_phone" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row >
                <el-col :span="12">
                    <el-form-item :required="required" label="邮箱" :label-width="formLabelWidth">
                        <el-input v-model.trim="form.email" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="所属行业" :label-width="formLabelWidth">
                        <el-input v-model.trim="form.industry" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-form-item :required="required" label="公司名称" :label-width="formLabelWidth">
                <el-input v-model.trim="form.company" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="我想了解的功能模块">
                <br />
                <el-checkbox-group v-model="form.topics">
                    <el-row>
                        <el-col><el-checkbox label="网店助手（淘宝、京东、苏宁、有赞、拼多多、小红书、唯品会、微店等）" name="topics"></el-checkbox></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-checkbox label="订货管理" name="topics"></el-checkbox>
                        </el-col>
                        <el-col :span="12">
                            <el-checkbox label="仓储管理" name="topics"></el-checkbox>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-checkbox label="验货管理" name="topics"></el-checkbox>
                        </el-col>
                        <el-col :span="12">
                            <el-checkbox label="返修管理" name="topics"></el-checkbox>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-checkbox label="条码管理" name="topics"></el-checkbox>
                        </el-col>
                        <el-col :span="12">
                            <el-checkbox label="售后管理" name="topics"></el-checkbox>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-checkbox label="借入借出" name="topics"></el-checkbox>
                        </el-col>
                        <el-col :span="12">
                            <el-checkbox label="缺货控制" name="topics"></el-checkbox>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-checkbox label="核算模块（项目核算）" name="topics"></el-checkbox>
                        </el-col>
                        <el-col :span="12">
                            <el-checkbox label="打包工作台" name="topics"></el-checkbox>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-checkbox label="电子面单打印" name="topics"></el-checkbox>
                        </el-col>
                        <el-col :span="12">
                            <el-checkbox label="PDA手持扫码验货" name="topics"></el-checkbox>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-input
                                class="noborder"
                                placeholder="其他"
                                v-model.trim="others">
                        </el-input>
                    </el-row>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="我希望收到ERP的电子通讯和新闻邮件" :required="required">
                <el-radio-group v-model="form.notification">
                    <el-radio label="1">是</el-radio>
                    <el-radio label="0">否</el-radio>
                </el-radio-group>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="onClose()" v-show="showCancel">取 消</el-button>
            <el-button type="primary" @click="onSubmit()">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
    export default {
        name: "ApplyForm",
        props: ['dialogVisible'],
        data(){
            return {
                fullscreen: false,
                required: true,
                others: '',
                form: {
                    name: '',
                    mobile_phone: '',
                    email: '',
                    company: '',
                    topics: [],
                    industry: '',
                    notification: '1'
                },
                formLabelWidth: '80px',
                size: 'medium',
                showCancel: false
            }
        },
        watch: {
            '$route.name': {
                handler(cur) {
                    if (cur == 'apply') {
                        this.fullscreen = true
                        this.size = 'small'
                        this.showCancel = false
                    }else {
                        this.showCancel = true
                    }
                },
                immediate: true
            }
        },
        methods: {
            validate(form) {
                if ( !form.name ) return alert('请填写真实姓名')
                if ( form.mobile_phone.length != 11 || form.mobile_phone.slice(0, 1) != 1 ) {
                    return alert('请填写真实的手机号，以便我们为您提供试用账号')
                }

                if ( !this.isEmail(form.email) ) return alert('邮箱格式错误')
                if ( !form.company ) return alert('请填写公司名称')
                return true
            },
            isEmail(str) {
                let reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
                return reg.test(str)
            },
            onClose() {
                this.$emit('update:dialogVisible', false)
                this.form = Object.assign({}, this.$data.form, this.$options.data().form)
                this.others = ''
            },
            onSubmit() {
                let form = this.form
                if ( !this.validate(form) ) return
                if (this.others !== '') {
                    form.topics.push(this.others)
                }
                form.topics = form.topics.join(',')
                form.notification = form.notification === '1'
                this.$axios({
                    url: '/api/try_outs',
                    method: 'POST',
                    data: JSON.stringify(form)
                }).then(res => {
                    this.dialogVisible = false
                    alert('提交成功，我们的客服人员会尽快与您联系！')
                }).catch(err => {
                    alert('网络异常')
                })
            },
        }
    }
</script>
