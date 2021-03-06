import { init } from '../api';
export default {

  /*
  ------------------------------------------
  | FETCH_PROJECTS:void
  |
  | Fetches data and projects
  ------------------------------------------ */
  FETCH_PROJECTS: ({ commit }) => {
    let _projects = [];

    return init()
      .then( (projects) => {
        _.each( projects, (projects, key) => {
          _projects.push({
            title: key,
            projects: projects
          });
        });
        commit('PROJECTS', _projects);
      });
  },

  /*
  ------------------------------------------
  | SET_WIN_SCROLL:void
  |
  | Sets win scroll in appScroll.
  ------------------------------------------ */
  SET_WIN_SCROLL: ({ commit }, obj) => {
    commit('WIN_SCROLL', obj);
  },

  /*
  ------------------------------------------
  | SET_MENU_SCROLL:void
  |
  | Sets menu scroll.
  ------------------------------------------ */
  SET_MENU_SCROLL: ({ commit }, obj) => {
    commit('MENU_SCROLL', obj);
  },

  /*
  ------------------------------------------
  | SET_STUDIO_SCROLL:void
  |
  | Sets studio scroll.
  ------------------------------------------ */
  SET_STUDIO_SCROLL: ({ commit }, obj) => {
    commit('STUDIO_SCROLL', obj);
  },

  /*
  ------------------------------------------
  | SET_PROJECT_SCROLL:void
  |
  | Sets project.
  ------------------------------------------ */
  SET_PROJECT_SCROLL: ({ commit }, obj) => {
    commit('PROJECT_SCROLL', obj);
  },

  /*
  ------------------------------------------
  | SET_ACTIVE_SCROLL:void
  |
  | Sets active scroll.
  ------------------------------------------ */
  SET_ACTIVE_SCROLL: ({ commit }, str) => {
    commit('ACTIVE_SCROLL', str);
  },

  /*
  ------------------------------------------
  | SET_APP_SIZE:void
  |
  | Sets the global app size.
  ------------------------------------------ */
  SET_APP_SIZE: ({ commit }, obj) => {
    commit('APP_SIZE', obj);
  },

  /*
  ------------------------------------------
  | SET_HEADER:void
  |
  | Sets the header state.
  ------------------------------------------ */
  SET_HEADER: ({ commit }, obj) => {
    if(obj.delay === 0) {
      commit('HEADER', obj);
    } else {
      setTimeout(() => commit('HEADER', obj), obj.delay);
    }
  },

  /*
  ------------------------------------------
  | SET_BIZ_POSITION:void
  |
  | Sets the biz widget position.
  ------------------------------------------ */
  SET_BIZ_POSITION: ({ commit }, obj) => {
    if(obj.delay === 0) {
      commit('BIZ_POSITION', obj);
    } else {
      setTimeout(() => commit('BIZ_POSITION', obj), obj.delay);
    }
  },

  /*
  ------------------------------------------
  | TRANSITION:void (-)
  |
  | Sets transition origin ( where a transition is triggered from )
  ------------------------------------------ */
  TRANSITION: ({commit}, origin) => {
    commit('TRANSITION_ORIGIN', origin);
  },

  /*
  ------------------------------------------
  | ADD_COMPONENT_TO_RENDER_QUEUE:void (-)
  |
  | Add a component to the render queue
  ------------------------------------------ */
  ADD_COMPONENT_TO_RENDER_QUEUE({commit}, component){
    commit('ADD_TO_RENDERER', component);
  },

  /*
  ------------------------------------------
  | REMOVE_COMONENT_FROM_RENDER_QUEUE:void (-)
  |
  | Remove a component from the render queue
  ------------------------------------------ */
  REMOVE_COMONENT_FROM_RENDER_QUEUE({ commit}, component){
    commit('REMOVE_FROM_RENDERER', component);
  }
};
