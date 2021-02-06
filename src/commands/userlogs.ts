import Command from '../lib/structures/Command';

export default new Command('userlogs', async (caller, cmd) => {
	if (!cmd.args[0]) return caller.utils.discord.createMessage(cmd.channel.id, 'Provide a user ID.');
	const links = await caller.db.getUserLogs(cmd.args[0]);
	if (!links) return caller.utils.discord.createMessage(cmd.channel.id, 'No logs found.');

	caller.utils.discord.createMessage(cmd.channel.id, links.join('\n'));
},
{
	level: 'HELPER',
	aliases: ['logs']
});