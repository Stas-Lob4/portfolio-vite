import { type ISourceOptions, MoveDirection, OutMode } from '@tsparticles/engine'

export const options: ISourceOptions = {
  autoPlay: true,
  background: {
    color: {
      value: '#000000',
    },
    image: '',
    opacity: 1,
    position: '',
    repeat: '',
    size: '',
  },
  backgroundMask: {
    composite: 'destination-out',
    cover: {
      color: {
        value: '',
      },
      opacity: 1,
    },
    enable: false,
  },
  clear: true,
  defaultThemes: {},
  delay: 0,
  detectRetina: true,
  duration: 0,
  emitters: {
    autoPlay: true,
    fill: true,
    life: {
      wait: false,
    },
    particles: {
      move: {
        outModes: {
          default: 'none',
          right: 'destroy',
        },
        speed: 10,
        straight: true,
      },
      rotate: {
        animation: {
          enable: true,
          speed: 10,
          sync: true,
        },
        value: {
          max: 360,
          min: 0,
        },
      },
      shape: {
        options: {
          images: {
            height: 634,
            src: 'https://particles.js.org/images/cyan_amongus.png',
            width: 500,
          },
        },
        type: 'images',
      },
      size: {
        value: 40,
      },
      zIndex: {
        value: 0,
      },
    },
    position: {
      x: -5,
      y: 55,
    },
    rate: {
      delay: 7,
      quantity: 1,
    },
    shape: {
      options: {},
      replace: {
        color: false,
        opacity: false,
      },
      type: 'square',
    },
    size: {
      height: 0,
      mode: 'percent',
      width: 0,
    },
    startCount: 0,
  },
  fpsLimit: 120,
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  interactivity: {
    detectsOn: 'window',
    events: {
      onClick: {
        enable: false,
        mode: [],
      },
      onDiv: {
        enable: false,
        mode: [],
        selectors: [],
        type: 'circle',
      },
      onHover: {
        enable: false,
        mode: [],
        parallax: {
          enable: false,
          force: 2,
          smooth: 10,
        },
      },
      resize: {
        delay: 0.5,
        enable: true,
      },
    },
    modes: {
      attract: {
        distance: 200,
        duration: 0.4,
        easing: 'ease-out-quad',
        factor: 1,
        maxSpeed: 50,
        speed: 1,
      },
      bounce: {
        distance: 200,
      },
      bubble: {
        distance: 200,
        divs: {
          distance: 200,
          duration: 0.4,
          mix: false,
          selectors: [],
        },
        duration: 0.4,
        mix: false,
      },
      connect: {
        distance: 80,
        links: {
          opacity: 0.5,
        },
        radius: 60,
      },
      grab: {
        distance: 100,
        links: {
          blink: false,
          consent: false,
          opacity: 1,
        },
      },
      light: {
        area: {
          gradient: {
            start: {
              value: '#ffffff',
            },
            stop: {
              value: '#000000',
            },
          },
          radius: 1000,
        },
        shadow: {
          color: {
            value: '#000000',
          },
          length: 2000,
        },
      },
      particle: {
        pauseOnStop: false,
        replaceCursor: false,
        stopDelay: 0,
      },
      push: {
        default: true,
        groups: [],
        quantity: 4,
      },
      remove: {
        quantity: 2,
      },
      repulse: {
        distance: 200,
        divs: {
          distance: 200,
          duration: 0.4,
          easing: 'ease-out-quad',
          factor: 100,
          maxSpeed: 50,
          selectors: [],
          speed: 1,
        },
        duration: 0.4,
        easing: 'ease-out-cubic',
        factor: 100,
        maxSpeed: 50,
        speed: 1,
      },
      slow: {
        factor: 3,
        radius: 200,
      },
      trail: {
        delay: 1,
        pauseOnStop: false,
        quantity: 1,
      },
    },
  },
  manualParticles: [],
  motion: {
    disable: false,
    reduce: {
      factor: 4,
      value: true,
    },
  },
  particles: {
    bounce: {
      horizontal: {
        value: 1,
      },
      vertical: {
        value: 1,
      },
    },
    collisions: {
      absorb: {
        speed: 2,
      },
      bounce: {
        horizontal: {
          value: 1,
        },
        vertical: {
          value: 1,
        },
      },
      enable: false,
      maxSpeed: 50,
      mode: 'bounce',
      overlap: {
        enable: true,
        retries: 0,
      },
    },
    color: {
      animation: {
        h: {
          count: 0,
          decay: 0,
          delay: 0,
          enable: false,
          offset: 0,
          speed: 1,
          sync: true,
        },
        l: {
          count: 0,
          decay: 0,
          delay: 0,
          enable: false,
          offset: 0,
          speed: 1,
          sync: true,
        },
        s: {
          count: 0,
          decay: 0,
          delay: 0,
          enable: false,
          offset: 0,
          speed: 1,
          sync: true,
        },
      },
      value: '#fff',
    },
    destroy: {
      bounds: {},
      mode: 'none',
      split: {
        count: 1,
        factor: {
          value: 3,
        },
        particles: {},
        rate: {
          value: {
            max: 9,
            min: 4,
          },
        },
        sizeOffset: true,
      },
    },
    effect: {
      close: true,
      fill: true,
      options: {},
      type: [],
    },
    groups: {
      z1000: {
        number: {
          value: 40,
        },
        zIndex: {
          value: 10,
        },
      },
      z2500: {
        number: {
          value: 50,
        },
        zIndex: {
          value: 25,
        },
      },
      z5000: {
        number: {
          value: 70,
        },
        zIndex: {
          value: 50,
        },
      },
      z7500: {
        number: {
          value: 30,
        },
        zIndex: {
          value: 75,
        },
      },
    },
    life: {
      count: 0,
      delay: {
        sync: false,
        value: 0,
      },
      duration: {
        sync: false,
        value: 0,
      },
    },
    links: {
      blink: false,
      color: {
        value: '#fff',
      },
      consent: false,
      distance: 100,
      enable: false,
      frequency: 1,
      opacity: 1,
      shadow: {
        blur: 5,
        color: {
          value: '#000',
        },
        enable: false,
      },
      triangles: {
        enable: false,
        frequency: 1,
      },
      warp: false,
      width: 1,
    },
    move: {
      angle: {
        offset: 0,
        value: 10,
      },
      attract: {
        distance: 200,
        enable: false,
        rotate: {
          x: 3000,
          y: 3000,
        },
      },
      center: {
        mode: 'percent',
        radius: 0,
        x: 50,
        y: 50,
      },
      decay: 0,
      direction: 'right',
      distance: {},
      drift: 0,
      enable: true,
      gravity: {
        acceleration: 9.81,
        enable: false,
        inverse: false,
        maxSpeed: 50,
      },
      outModes: {
        bottom: 'out',
        default: 'out',
        left: 'out',
        right: 'out',
        top: 'out',
      },
      path: {
        clamp: true,
        delay: {
          value: 0,
        },
        enable: false,
        options: {},
      },
      random: false,
      size: false,
      speed: 5,
      spin: {
        acceleration: 0,
        enable: false,
      },
      straight: false,
      trail: {
        enable: false,
        fill: {},
        length: 10,
      },
      vibrate: false,
      warp: false,
    },
    number: {
      density: {
        enable: false,
        height: 1080,
        width: 1920,
      },
      limit: {
        mode: 'delete',
        value: 0,
      },
      value: 200,
    },
    opacity: {
      animation: {
        count: 0,
        decay: 0,
        delay: 0,
        destroy: 'none',
        enable: false,
        mode: 'auto',
        speed: 2,
        startValue: 'random',
        sync: false,
      },
      value: 1,
    },
    orbit: {
      animation: {
        count: 0,
        decay: 0,
        delay: 0,
        enable: false,
        speed: 1,
        sync: false,
      },
      enable: false,
      opacity: 1,
      rotation: {
        value: 45,
      },
      width: 1,
    },
    reduceDuplicates: false,
    repulse: {
      distance: 1,
      duration: 1,
      enabled: false,
      factor: 1,
      speed: 1,
      value: 0,
    },
    roll: {
      darken: {
        enable: false,
        value: 0,
      },
      enable: false,
      enlighten: {
        enable: false,
        value: 0,
      },
      mode: 'vertical',
      speed: 25,
    },
    rotate: {
      animation: {
        decay: 0,
        enable: false,
        speed: 0,
        sync: false,
      },
      direction: 'clockwise',
      path: false,
      value: 0,
    },
    shadow: {
      blur: 0,
      color: {
        value: '#000',
      },
      enable: false,
      offset: {
        x: 0,
        y: 0,
      },
    },
    shape: {
      close: true,
      fill: true,
      options: {},
      type: 'circle',
    },
    size: {
      animation: {
        count: 0,
        decay: 0,
        delay: 0,
        destroy: 'none',
        enable: false,
        mode: 'auto',
        speed: 5,
        startValue: 'random',
        sync: false,
      },
      value: 3,
    },
    stroke: {
      color: {
        animation: {
          h: {
            count: 0,
            decay: 0,
            delay: 0,
            enable: false,
            offset: 0,
            speed: 0,
            sync: false,
          },
          l: {
            count: 0,
            decay: 0,
            delay: 0,
            enable: false,
            offset: 0,
            speed: 1,
            sync: true,
          },
          s: {
            count: 0,
            decay: 0,
            delay: 0,
            enable: false,
            offset: 0,
            speed: 1,
            sync: true,
          },
        },
        value: '',
      },
      width: 0,
    },
    tilt: {
      animation: {
        decay: 0,
        enable: false,
        speed: 0,
        sync: false,
      },
      direction: 'clockwise',
      enable: false,
      value: 0,
    },
    twinkle: {
      lines: {
        enable: false,
        frequency: 0.05,
        opacity: 1,
      },
      particles: {
        enable: false,
        frequency: 0.05,
        opacity: 1,
      },
    },
    wobble: {
      distance: 5,
      enable: false,
      speed: {
        angle: 50,
        move: 10,
      },
    },
    zIndex: {
      opacityRate: 0.5,
      sizeRate: 1,
      value: 5,
      velocityRate: 1,
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  responsive: [],
  smooth: false,
  style: {},
  themes: [],
  zLayers: 100,
}

//   {
//   background: {
//     color: {
//       value: '#212226',
//     },
//   },
//   backgroundMask: {
//     composite: 'destination-out',
//     cover: {
//       color: {
//         value: '',
//       },
//       opacity: 1,
//     },
//     enable: false,
//   },
//   detectRetina: true,
//   fpsLimit: 120,
//   interactivity: {
//     events: {
//       onClick: {
//         enable: true,
//         mode: 'push',
//       },
//       onHover: {
//         enable: true,
//         mode: 'repulse',
//       },
//     },
//     modes: {
//       push: {
//         quantity: 4,
//       },
//       repulse: {
//         distance: 200,
//         duration: 0.4,
//       },
//     },
//   },
//   particles: {
//     color: {
//       value: '#ffffff',
//     },
//     links: {
//       color: '#ffffff',
//       distance: 150,
//       enable: true,
//       opacity: 0.5,
//       width: 1,
//     },
//     move: {
//       direction: MoveDirection.none,
//       enable: true,
//       outModes: {
//         default: OutMode.out,
//       },
//       random: false,
//       speed: 6,
//       straight: false,
//     },
//     number: {
//       density: {
//         enable: true,
//       },
//       value: 80,
//     },
//     opacity: {
//       value: 0.5,
//     },
//     shape: {
//       type: 'circus',
//     },
//     size: {
//       value: { max: 5, min: 1 },
//     },
//   },
// }
