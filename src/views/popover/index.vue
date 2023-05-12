<script setup lang="ts">
import { reactive, ref } from 'vue'

const props = defineProps({
    title: {
        type: String,
        default: '新增门店'
    }
})
const radio = ref('基本信息')
const tagTextMap = new Map([
    [0, '基本信息'],
    [1, '门店状态信息'],
    [2, '营运架构信息']
])
const formInline = reactive({
    一级区域: '',
    二级区域: '',
    妖码: '',
    工程店名: '',
    木瓜编码: '',
    木瓜店名: '',
    闭店日期: '',
    开业日期: '',
    门店地址: '',
    门店电话: '',
    营业时间: ''
})
const dialogVisible = ref()
</script>
<template>
    <div class="popover">
        <el-button type="primary" @click="dialogVisible = true">Primary</el-button>

        <el-dialog v-model="dialogVisible" :title="props.title" width="50%">
            <el-radio-group v-model="radio">
                <el-space wrap>
                    <el-radio-button
                        v-for="(item, key) in tagTextMap.values()"
                        :key="key"
                        :label="item"
                    />
                </el-space>
            </el-radio-group>

            <el-form :inline="true" :model="formInline" label-width="100">
                <div class="tag-box" v-show="tagTextMap.get(0) === radio">
                    <el-form-item label="一级区域">
                        <el-select v-model="formInline['一级区域']" placeholder="TMD!!!">
                            <el-option label="山东" value="山东" />
                            <el-option label="北京" value="北京" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="二级区域">
                        <el-select v-model="formInline['二级区域']" placeholder="TMD!!!">
                            <el-option label="山东" value="山东" />
                            <el-option label="北京" value="北京" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="妖码">
                        <el-input v-model="formInline['妖码']" placeholder="TMD!!!" />
                    </el-form-item>
                    <el-form-item label="工程店名">
                        <el-input v-model="formInline['工程店名']" placeholder="TMD!!!" />
                    </el-form-item>
                    <el-form-item label="木瓜编码">
                        <el-input v-model="formInline['木瓜编码']" placeholder="TMD!!!" />
                    </el-form-item>
                    <el-form-item label="木瓜店名">
                        <el-input v-model="formInline['木瓜店名']" placeholder="TMD!!!" />
                    </el-form-item>
                    <el-form-item label="闭店日期">
                        <el-select v-model="formInline['闭店日期']" placeholder="TMD!!!">
                            <el-option label="山东" value="山东" />
                            <el-option label="北京" value="北京" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="开业日期">
                        <el-select v-model="formInline['开业日期']" placeholder="TMD!!!">
                            <el-option label="山东" value="山东" />
                            <el-option label="北京" value="北京" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="门店地址">
                        <el-input v-model="formInline['门店地址']" placeholder="TMD!!!" />
                    </el-form-item>
                    <el-form-item label="门店电话">
                        <el-input v-model="formInline['门店电话']" placeholder="TMD!!!" />
                    </el-form-item>
                    <el-form-item label="营业时间">
                        <el-time-picker
                            v-model="formInline['营业时间']"
                            is-range
                            range-separator="~"
                            start-placeholder="Start time"
                            end-placeholder="End time"
                        />
                    </el-form-item>
                </div>
                <div class="tag-box" v-show="tagTextMap.get(1) === radio">1</div>
                <div class="tag-box" v-show="tagTextMap.get(2) === radio">2</div>
            </el-form>

            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="dialogVisible = false"> Confirm </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<style lang="scss">
.popover {
    .tag-box {
        padding-top: 30px;
    }
    .el-input__wrapper {
        width: 250px;
    }
}
</style>
