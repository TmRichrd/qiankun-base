const render = ($, props, global) => {
  $('#purehtml-container').html('Hello, render with jQuery')
  $('#change-btn').on('click', () => {
    // $('#purehtml-container').html('Hello, purehtml')
    props.setGlobalState({ abc: (global.abc += 1) })
  })
  return Promise.resolve()
}

;((global) => {
  global['purehtml'] = {
    bootstrap: () => {
      return Promise.resolve()
    },
    mount: (props) => {
      let global = {}
      props.onGlobalStateChange((state, prev) => {
        // state: 变更后的状态; prev 变更前的状态
        $('#state').html(`这是主应用的全局状态${state.abc}`)
        global = state
      }, true)

      return render($, props, global)
    },
    unmount: () => {
      console.log('purehtml unmount')
      return Promise.resolve()
    },
  }
})(window)
