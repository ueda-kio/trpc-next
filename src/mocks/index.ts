if (typeof window === 'undefined') {
  void (async () => {
    const { server } = await import('./server');
    server.listen();
    console.log('server start: ', Date.now());
    console.log('server list: ', server.listHandlers());
  })();
} else {
  void (async () => {
    const { worker } = await import('./browser');
    worker.start();
  })();
}

export {};
