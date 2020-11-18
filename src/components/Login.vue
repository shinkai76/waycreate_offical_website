<template>
    <el-dialog
            title="登录C8ERP"
            :close-on-press-escape="false"
            :visible.sync="dialogVisible"
            :before-close="onCancel"
            width="30%">
        <el-input
                v-model.trim="set_of_book"
                placeholder="请输入企业号"
                prefix-icon="el-icon-search"
                @keyup.enter.native="onConfirm">
        </el-input>
        <span slot="footer" class="dialog-footer">
            <el-button @click="onCancel()">取 消</el-button>
            <el-button type="primary" @click="onConfirm()">确 定</el-button>
          </span>
    </el-dialog>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                dialogVisible: false,
                set_of_book: ''
            }
        },
        watch: {
            '$store.state.dialogVisible': {
                handler(cur, old) {
                    this.dialogVisible = cur
                }
            }
        },
        methods: {
            onCancel() {
                this.set_of_book = ''
                this.$store.commit('TRIGGER_LOGIN', false)
            },
            onConfirm() {
                if ( this.set_of_book === '' ) return
                let url = `/api/set_of_books/${ this.set_of_book }`
                this.$axios({ url }).then(res => {
                    let href = res.data + `?set_of_book=${this.set_of_book}`
                    window.open(href, '_self')
                }).catch(err => {
                    alert('不存在的企业号')
                })
            }
        }
    }
</script>

<style scoped>

</style>
