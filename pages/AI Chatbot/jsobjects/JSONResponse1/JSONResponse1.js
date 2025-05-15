export default {
// Adding chatHistory Object
	chatHistory: [],

	async sendMessage(){
		const newMessage = { role: "user", content: Input1.text };
		this.chatHistory.push(newMessage); 
		const reply = await Api1.run();
		this.chatHistory.push({role:"assistant", content: reply.choices[0].message.content});
		resetWidget('Input1')
		return this.chatHistory;
	}
}
