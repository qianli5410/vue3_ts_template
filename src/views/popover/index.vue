<script setup lang="ts">
import ElMessage from 'element-plus/lib/components/message/index.js'
import { FormRules } from 'element-plus/lib/components/form/src/types.js'
import { reactive, ref } from 'vue'
import { TagTextType, formInlineType } from './type'
const props = defineProps({
	title: {
		type: String,
		default: '新增门店',
	},
})
const emits = defineEmits(['callback'])

const radio = ref<TagTextType>('基本信息')
const tagTextArr: Array<TagTextType> = ['基本信息', '门店状态信息', '营运架构信息']

const formInline = reactive<formInlineType>({
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
	营业时间: '',
	是否合规: '',
	门店状态: '',
	门店模式: '',
	经营方式: '',
})

const selectEnum = reactive({
	一级区域: ['山东', '北京'],
	二级区域: ['济南', '淄博'],
	闭店日期: [],
	开业日期: [],
	是否合规: ['合规', '非合规'],
	门店状态: ['正常', '闭店'],
	门店模式: ['堂食 + 外卖', '堂食', '外卖'],
	经营方式: ['直营', '连锁', '空'],
})

const dialogVisible = ref()

const readOnlyInfo = reactive({
	营运架构店名: '羊静店',
	营运经理: '羊小静·110',
	督导: '羊大静·119',
	大店长: '羊幼静·120',
	店长: '羊老静·114',
})

// eslint-disable-next-line prettier/prettier
const onCancel = () => {
	dialogVisible.value = false
}
const fromRef = ref()
// eslint-disable-next-line prettier/prettier
const onConfirm = () => {
	fromRef.value.validate((valid: boolean) => {
		if (valid) {
			emits('callback', formInline)
		} else {
			ElMessage.error('请输入必填项')
		}
	})
}

const rules = reactive<FormRules>({
	一级区域: [{ required: true, message: '请填写一级区域', trigger: 'blur' }],
	二级区域: [{ required: true, message: '请填写二级区域', trigger: 'blur' }],
	妖码: [{ required: true, message: '请填写妖码', trigger: 'blur' }],
	工程店名: [{ required: true, message: '请填写工程店名', trigger: 'blur' }],
	木瓜店名: [{ required: true, message: '请填写木瓜店名', trigger: 'blur' }],
	是否合规: [{ required: true, message: '请填写是否合规', trigger: 'blur' }],
	门店状态: [{ required: true, message: '请填写门店状态', trigger: 'blur' }],
	门店模式: [{ required: true, message: '请填写门店模式', trigger: 'blur' }],
	经营方式: [{ required: true, message: '请填写经营方式', trigger: 'blur' }],
})
</script>
<template>
	<div class="popover">
		<div @click="dialogVisible = true">
			<slot> </slot>
		</div>
		<el-dialog v-model="dialogVisible" :title="props.title" width="50%" destroy-on-close>
			<el-radio-group v-model="radio">
				<el-space wrap>
					<el-radio-button v-for="(item, key) in tagTextArr" :key="key" :label="item" />
				</el-space>
			</el-radio-group>

			<el-form :inline="true" :model="formInline" label-width="120" ref="fromRef" :rules="rules">
				<div class="tag-box" v-show="tagTextArr[0] === radio">
					<el-form-item label="一级区域" prop="一级区域" required>
						<el-select v-model="formInline['一级区域']" placeholder="TMD!!!">
							<el-option v-for="(item, key) in selectEnum['一级区域']" :key="key" :label="item" :value="item" />
						</el-select>
					</el-form-item>
					<el-form-item label="二级区域" prop="二级区域">
						<el-select v-model="formInline['二级区域']" placeholder="TMD!!!">
							<el-option v-for="(item, key) in selectEnum['二级区域']" :key="key" :label="item" :value="item" />
						</el-select>
					</el-form-item>
					<el-form-item label="妖码" prop="妖码" required>
						<el-input v-model="formInline['妖码']" placeholder="TMD!!!" />
					</el-form-item>
					<el-form-item label="工程店名" prop="工程店名" required>
						<el-input v-model="formInline['工程店名']" placeholder="TMD!!!" />
					</el-form-item>
					<el-form-item label="木瓜编码">
						<el-input v-model="formInline['木瓜编码']" placeholder="TMD!!!" />
					</el-form-item>
					<el-form-item label="木瓜店名" prop="木瓜店名" required>
						<el-input v-model="formInline['木瓜店名']" placeholder="TMD!!!" />
					</el-form-item>
					<el-form-item label="闭店日期">
						<el-select v-model="formInline['闭店日期']" placeholder="TMD!!!">
							<el-option v-for="(item, key) in selectEnum['闭店日期']" :key="key" :label="item" :value="item" />
						</el-select>
					</el-form-item>
					<el-form-item label="开业日期">
						<el-select v-model="formInline['开业日期']" placeholder="TMD!!!">
							<el-option v-for="(item, key) in selectEnum['开业日期']" :key="key" :label="item" :value="item" />
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
				<div class="tag-box" v-show="tagTextArr[1] === radio">
					<el-form-item label="是否合规" prop="是否合规" required>
						<el-select v-model="formInline['是否合规']" placeholder="TMD!!!">
							<el-option v-for="(item, key) in selectEnum['是否合规']" :key="key" :label="item" :value="item" />
						</el-select>
					</el-form-item>
					<el-form-item label="门店状态" prop="门店状态" required>
						<el-select v-model="formInline['门店状态']" placeholder="TMD!!!">
							<el-option v-for="(item, key) in selectEnum['门店状态']" :key="key" :label="item" :value="item" />
						</el-select>
					</el-form-item>
					<el-form-item label="门店模式" prop="门店模式" required>
						<el-select v-model="formInline['门店模式']" placeholder="TMD!!!">
							<el-option v-for="(item, key) in selectEnum['门店模式']" :key="key" :label="item" :value="item" />
						</el-select>
					</el-form-item>
					<el-form-item label="经营方式" prop="经营方式" required>
						<el-select v-model="formInline['经营方式']" placeholder="TMD!!!">
							<el-option v-for="(item, key) in selectEnum['经营方式']" :key="key" :label="item" :value="item" />
						</el-select>
					</el-form-item>
				</div>
				<div class="tag-box" v-show="tagTextArr[2] === radio">
					<el-row>
						<el-form-item label="营运架构店名">
							<el-text class="mx-1">{{ readOnlyInfo['营运架构店名'] }}</el-text>
						</el-form-item>
					</el-row>
					<el-form-item label="营运经理">
						<el-text class="mx-1">{{ readOnlyInfo['营运经理'] }}</el-text>
					</el-form-item>
					<el-form-item label="督导">
						<el-text class="mx-1">{{ readOnlyInfo['督导'] }}</el-text>
					</el-form-item>
					<el-form-item label="大店长">
						<el-text class="mx-1">{{ readOnlyInfo['大店长'] }}</el-text>
					</el-form-item>
					<el-form-item label="店长">
						<el-text class="mx-1">{{ readOnlyInfo['店长'] }}</el-text>
					</el-form-item>
				</div>
			</el-form>

			<template #footer>
				<span class="dialog-footer">
					<el-button @click="onCancel">取消</el-button>
					<el-button type="primary" @click="onConfirm">完成</el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>

<style lang="scss">
$itemWidth: 230px;
.popover {
	.tag-box {
		padding-top: 30px;
	}
	.el-input__wrapper {
		width: $itemWidth;
	}
	.el-form-item__content {
		width: $itemWidth;
	}
}
</style>
