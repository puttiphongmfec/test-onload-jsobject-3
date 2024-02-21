export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		console.log(appsmith.store.response)
		if (!appsmith.store.response) {
			navigateTo("Page2 - Login")
		}
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}