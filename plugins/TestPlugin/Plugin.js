class TestPlugin {
  constructor() {

  }
  commandKill(command) {
    var self = this;
    if (command.params[1] == undefined) {
      self.disnode.bot.SendCompactedEmbed(comand.msg.channel_id, ":warning: Error", "You may have forgot to mention someone. Please try again.")
    } else {
      if (command.params[0]) {
        self.disnode.bot.SendCompactEmbed(command.msg.channel_id, "Kill", `you have killed ${command.params}`);
      }
    }
  }


}
//made by Aiir
module.exports = TestPlugin;
