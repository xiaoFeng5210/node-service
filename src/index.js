const fastify = require('fastify')({ logger: true });
const path = require('node:path');

// hostname: 192.168.4.47
// 注册 fastify-static 插件，指定静态资源目录为 'public'
fastify.register(require('@fastify/static'), {
  root: path.join(__dirname, '../public'),
  prefix: '/public/', // 访问静态资源时的路径前缀
});

fastify.get("/", async () => {
  return { msg: "hello 我是小风" };
});

fastify.get('/tea/download', async (req, reply) => {
  // 发送文件内容
  return reply.download('app-release-1.4.apk');
})





















// 启动服务器
const start = async () => {
  try {
    await fastify.listen(5616, '192.168.4.47');
    console.log('Server is running on http://localhost:5616');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start()


