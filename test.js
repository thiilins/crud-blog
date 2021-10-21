const post = {
    id: 1,
    user_id: 1,
    title: "Titulo 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus eros in mi tristique dignissim. Nullam faucibus, diam a elementum porttitor, erat tellus dapibus elit, at ultricies sem velit a metus. Quisque quis venenatis neque. Vestibulum iaculis fringilla tellus, sed auctor mauris pulvinar et. Etiam quis egestas libero. Suspendisse scelerisque, nisl a semper commodo, turpis quam pellentesque velit, quis pretium urna mauris eu est. Praesent non dictum sem. Morbi a magna dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus eros in mi tristique dignissim. Nullam faucibus, diam a elementum porttitor, erat tellus dapibus elit, at ultricies sem velit a metus. Quisque quis venenatis neque. Vestibulum iaculis fringilla tellus, sed auctor mauris pulvinar et. Etiam quis egestas libero. Suspendisse scelerisque, nisl a semper commodo, turpis quam pellentesque velit, quis pretium urna mauris eu est. Praesent non dictum sem. Morbi a magna dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus eros in mi tristique dignissim. Nullam faucibus, diam a elementum porttitor, erat tellus dapibus elit, at ultricies sem velit a metus. Quisque quis venenatis neque. Vestibulum iaculis fringilla tellus, sed auctor mauris pulvinar et. Etiam quis egestas libero. Suspendisse scelerisque, nisl a semper commodo, turpis quam pellentesque velit, quis pretium urna mauris eu est. Praesent non dictum sem. Morbi a magna dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus eros in mi tristique dignissim. Nullam faucibus, diam a elementum porttitor, erat tellus dapibus elit, at ultricies sem velit a metus. Quisque quis venenatis neque. Vestibulum iaculis fringilla tellus, sed auctor mauris pulvinar et. Etiam quis egestas libero. Suspendisse scelerisque, nisl a semper commodo, turpis quam pellentesque velit, quis pretium urna mauris eu est. Praesent non dictum sem. Morbi a magna dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus eros in mi tristique dignissim. Nullam faucibus, diam a elementum porttitor, erat tellus dapibus elit, at ultricies sem velit a metus. Quisque quis venenatis neque. Vestibulum iaculis fringilla tellus, sed auctor mauris pulvinar et. Etiam quis egestas libero. Suspendisse scelerisque, nisl a semper commodo, turpis quam pellentesque velit, quis pretium urna mauris eu est. Praesent non dictum sem. Morbi a magna dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus eros in mi tristique dignissim. Nullam faucibus, diam a elementum porttitor, erat tellus dapibus elit, at ultricies sem velit a metus. Quisque quis venenatis neque. Vestibulum iaculis fringilla tellus, sed auctor mauris pulvinar et. Etiam quis egestas libero. Suspendisse scelerisque, nisl a semper commodo, turpis quam pellentesque velit, quis pretium urna mauris eu est. Praesent non dictum sem. Morbi a magna dolor.",
    category_id: 1,
    enable: true,
    creupdatedAtatedAt: "2021-10-21T04:55:21.000Z",
    updatedAt: "2021-10-21T04:55:21.000Z",
    user: {
      id: 1,
      fullname: "Administrador",
      username: "admin",
      password: "$2a$10$fBRmukiALKYaWqdIdCEjDOkg2c75wXlhcHwWPL1YtSSz.D/27q6EO",
      github: "github_link",
      linkedin: "linkedin_link",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus eros in mi tristique dignissim. Nullam faucibus, diam a elementum porttitor, erat tellus dapibus elit, at ultricies sem velit a metus. Quisque quis venenatis neque. Vestibulum iaculis fringilla tellus, sed auctor mauris pulvinar et. Etiam quis egestas libero. Suspendisse scelerisque, nisl a semper commodo, turpis quam pellentesque velit, quis pretium urna mauris eu est. Praesent non dictum sem. Morbi a magna dolor.",
      enable: true,
      createdAt: "2021-10-21T04:51:50.000Z",
      updatedAt: "2021-10-21T04:51:50.000Z",
    },
    category: {
      id: 1,
      name: "Categoria 1",
      enable: true,
      createdAt: "2021-10-21T04:41:26.000Z",
      updatedAt: "2021-10-21T04:41:26.000Z",
    },
    comments: [
      {
        id: 1,
        user_id: 1,
        post_id: 1,
        comment:
          "Aliquam pulvinar euismod orci ut suscipit. Vivamus sodales mauris eget consequat volutpat. Cras sodales mi felis. Cras ullamcorper odio dolor. Quisque risus ligula, interdum posuere diam in, tempor fringilla ex. Donec imperdiet purus vel turpis dictum, eget gravida arcu rhoncus. Suspendisse mollis pellentesque leo, sed efficitur sapien sagittis ac. Curabitur condimentum mattis odio vel placerat. Sed interdum massa sed urna porta, vel lobortis lacus facilisis. Etiam nec ante sit amet nibh mollis commodo. Vivamus viverra laoreet blandit. Sed ipsum urna, cursus vitae sagittis auctor, elementum at ex. Vivamus leo odio, pulvinar eleifend tempor eu, elementum ornare mauris. Curabitur viverra turpis turpis, eu pulvinar dolor tincidunt sed.",
        enable: true,
        createdAt: "2021-10-21T04:58:17.000Z",
        updatedAt: "2021-10-21T04:58:17.000Z",
      },
      {
        id: 2,
        user_id: 11,
        post_id: 1,
        comment:
          "Aliquam pulvinar euismod orci ut suscipit. Vivamus sodales mauris eget consequat volutpat. Cras sodales mi felis. Cras ullamcorper odio dolor. Quisque risus ligula, interdum posuere diam in, tempor fringilla ex. Donec imperdiet purus vel turpis dictum, eget gravida arcu rhoncus. Suspendisse mollis pellentesque leo, sed efficitur sapien sagittis ac. Curabitur condimentum mattis odio vel placerat. Sed interdum massa sed urna porta, vel lobortis lacus facilisis. Etiam nec ante sit amet nibh mollis commodo. Vivamus viverra laoreet blandit. Sed ipsum urna, cursus vitae sagittis auctor, elementum at ex. Vivamus leo odio, pulvinar eleifend tempor eu, elementum ornare mauris. Curabitur viverra turpis turpis, eu pulvinar dolor tincidunt sed.",
        enable: true,
        createdAt: "2021-10-21T04:58:29.000Z",
        updatedAt: "2021-10-21T04:58:29.000Z",
      },
    ],
  },

