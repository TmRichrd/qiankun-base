function emptyAction(): void {
  // 提示当前使用的是空 Action
  console.warn("Current execute action is empty!");
}

interface ActionsInterface {
  onGlobalStateChange: (...args: any[]) => void;
  setGlobalState: (...args: any[]) => void;
}

class Actions {
  // 默认值为空 Action
  actions: ActionsInterface = {
    onGlobalStateChange: emptyAction,
    setGlobalState: emptyAction,
  };

  /**
   * 设置 actions
   */
  setActions(actions: ActionsInterface): void {
    this.actions = actions;
  }

  /**
   * 映射
   */
  onGlobalStateChange(...args: any[]): void {
    return this.actions.onGlobalStateChange(...args);
  }

  /**
   * 映射
   */
  setGlobalState(...args: any[]): void {
    return this.actions.setGlobalState(...args);
  }
}

const actions = new Actions();
export default actions;
