<template>
  <div class="project" :class="colorClass">
    <div class="project-image squeleton-image" v-lazyload>
      <i class="material-icons view" v-show="imgHover">visibility</i>
      <router-link :to="'/project-detail/' + project.slug" @click="cleanSearch" @mouseover="imgHover = true" @mouseleave="imgHover = false">
        <img :data-url="'/img/' + project.slug + '/capture.webp'" alt="Project capture">
      </router-link>
    </div>
    <div class="project-description">
      <h3>{{ project.name }}</h3>
      <p>{{ project.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { store } from '@/store'

export default defineComponent({
  name: 'Project',
  props: {
    project: {}
  },
  data() {
    const classes = ['red', 'blue', 'green', 'yellow', 'orange'];
    const index = Math.floor(Math.random() * Math.floor(classes.length - 1));
    return {
      colorClass: classes[index],
      imgHover: false
    }
  },
  methods: {
    cleanSearch() {
      store.commit('clearSearch');
    }
  },
  directives: {
    lazyload: {
      mounted(el: HTMLElement) {
        const loadImage = () => {
          const aTag = Array.from(el.children).find(
            elem => elem.nodeName === "A"
          ) as HTMLElement;
          const imageElement = aTag.children[0] as HTMLImageElement;

          if (imageElement) {
            imageElement.addEventListener("load", () => {
              el.classList.remove('squeleton-image');
            });
            imageElement.src = imageElement.dataset.url as string; 
          }
        }

        const handleIntersect = (entries: any, observer: any) => {
          entries.forEach((entry: any) => {
            if (entry.isIntersecting) {
              loadImage();
              observer.unobserve(el);
            }
          });
        }

        const createObserver = () => {
          const options: IntersectionObserverInit = {
            root: null,
            threshold: 0
          };
          const observer = new IntersectionObserver(handleIntersect, options);
          observer.observe(el);
        }

        if (window["IntersectionObserver"]) {
          createObserver();
        } else {
          loadImage();
        }
      },
      updated(el: HTMLElement) {
        const aTag = Array.from(el.children).find(
          elem => elem.nodeName === "A"
        ) as HTMLElement;
        const imageElement = aTag.children[0] as HTMLImageElement;

        if (imageElement) {
          el.classList.remove('squeleton-image');
          imageElement.src = imageElement.dataset.url as string; 
        }
      }
    }
  }
});
</script>

<style scoped>

.project {
  width: 400px;
  margin: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.view {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  font-size: 50px;
  pointer-events: none;
  color: white;
}

.project-image {
  position: relative; /* needed for view height */
  height: 200px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.squeleton-image img {
  visibility: hidden;
}

.squeleton-image {
  background-image: linear-gradient(90deg, #ddd 0px, #f6f1f1 120px, #ddd 180px);
  background-size: 800px;
  animation: squeleton 1.5s infinite linear;
}
@keyframes squeleton {
  0% {
    background-position: -60px;
  }
  40%, 100% {
    background-position: 400px;
  }
}

.project p {
  margin: 0;
  font-size: 1.1em;
}

.project h3 {
  margin: 0 0 10px 0;
  font-size: 1.1em;
}

.project-description {
  padding: 15px;
}

@media screen and (max-width: 730px) {
  .project {
    width: 325px;
  }
}

</style>
