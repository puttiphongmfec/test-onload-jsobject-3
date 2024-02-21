export default {
	myVar1: [],
	myVar2: {},
	myFun1: async () => {
		await Api1.run()
		await storeValue("response", JSON.stringify(Api1.data))
		console.log(appsmith.store.response)
		navigateTo("Page1 - Landing")
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}