const COMPONENTS = {
    form: 'Form',
    video: 'Video',
    button: 'Button',
    adaptiveCarousel: 'AdaptiveCarousel',
    modal: 'Modal',
    toasts: 'Toast',
    twoup: 'TwoUp'
  },
  SOURCES = {
    prismic: [
      'src/pages/preview.tsx',
      'src/lib/resolve.js',
      'types/resolve.d.ts'
    ]
  };

module.exports = {
  prompts() {
    return [
      {
        type: 'input',
        name: 'name',
        message: 'Name:'
      },
      {
        type: 'input',
        name: 'url',
        message: 'URL:'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description:'
      },
      {
        type: 'input',
        name: 'author',
        message: 'Author:'
      },
      {
        type: 'input',
        name: 'brandColor',
        message: 'Brand color:',
        default: '#111'
      },
      {
        type: 'list',
        name: 'source',
        message: 'Source:',
        choices: ['Prismic', 'MDX', 'None'],
        filter: (source) => source.toLowerCase()
      },
      {
        type: 'checkbox',
        name: 'components',
        message: 'Extra components:',
        choices: [
          {
            name: 'Button',
            value: 'button',
            checked: false
          },
          {
            name: 'TwoUp',
            value: 'twoup',
            checked: false
          },
          {
            name: 'Form',
            value: 'form',
            checked: false
          },
          {
            name: 'Toast',
            value: 'toasts',
            checked: false
          },
          {
            name: 'AdaptiveCarousel',
            value: 'adaptiveCarousel',
            checked: false
          },
          {
            name: 'Modal',
            value: 'modal',
            checked: false
          },
          {
            name: 'Video',
            value: 'video',
            checked: false
          }
        ]
      },
      {
        type: 'input',
        name: 'prismic',
        message: 'Prismic repository name:',
        when: ({ source }) => source === 'prismic'
      },
      {
        type: 'input',
        name: 'content',
        message: 'Content source name:',
        when: ({ source }) => source === 'mdx'
      },
      {
        type: 'input',
        name: 'contentPath',
        message: 'Content folder path:',
        when: ({ source }) => source === 'mdx'
      }
    ];
  },
  actions: ({ answers }) => {
    console.log(
      Object.keys(SOURCES)
        .filter((source) => answers.source !== source)
        .map((source) => SOURCES[source].map((file) => `!${file}`))
        .flat()
    );
    return [
      {
        type: 'add',
        files: [
          '**',
          ...Object.keys(COMPONENTS)
            .filter((component) => !answers.components.includes(component))
            .map(
              (component) => `!src/components/${COMPONENTS[component]}/**/*`
            ),
          ...Object.keys(SOURCES)
            .filter((source) => answers.source !== source)
            .map((source) => SOURCES[source].map((file) => `!${file}`))
            .flat()
        ]
      }
    ];
  },

  async completed() {
    this.gitInit();
    await this.npmInstall();
    this.showProjectTips();
  }
};
