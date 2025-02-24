/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => EnhancedLinkSuggestionsPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian2 = require("obsidian");

// node_modules/monkey-around/mjs/index.js
function around(obj, factories) {
  const removers = Object.keys(factories).map((key) => around1(obj, key, factories[key]));
  return removers.length === 1 ? removers[0] : function() {
    removers.forEach((r) => r());
  };
}
function around1(obj, method, createWrapper) {
  const original = obj[method], hadOwn = obj.hasOwnProperty(method);
  let current = createWrapper(original);
  if (original)
    Object.setPrototypeOf(current, original);
  Object.setPrototypeOf(wrapper, current);
  obj[method] = wrapper;
  return remove;
  function wrapper(...args) {
    if (current === original && obj[method] === wrapper)
      remove();
    return current.apply(this, args);
  }
  function remove() {
    if (obj[method] === wrapper) {
      if (hadOwn)
        obj[method] = original;
      else
        delete obj[method];
    }
    if (current === original)
      return;
    current = original;
    Object.setPrototypeOf(wrapper, original || Function);
  }
}

// src/settings.ts
var import_obsidian = require("obsidian");
var DEFAULT_SETTINGS = {
  code: true,
  blockquote: true,
  heading: true,
  paragraph: true,
  callout: true,
  math: true,
  listItem: true,
  footnoteDefinition: false,
  element: false,
  table: true,
  comment: true,
  codeLines: 0,
  blockquoteLines: 0,
  paragraphLines: 0,
  calloutLines: 0,
  listItemLines: 0,
  footnoteDefinitionLines: 0,
  elementLines: 0,
  tableLines: 0,
  commentLines: 0,
  iembed: true,
  dev: false,
  disableClose: false
};
var EnhancedLinkSuggestionsSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(plugin) {
    super(plugin.app, plugin);
    this.plugin = plugin;
  }
  addToggleSetting(settingName, extraOnChange) {
    return new import_obsidian.Setting(this.containerEl).addToggle((toggle) => {
      toggle.setValue(this.plugin.settings[settingName]).onChange(async (value) => {
        this.plugin.settings[settingName] = value;
        await this.plugin.saveSettings();
        extraOnChange == null ? void 0 : extraOnChange(value);
      });
    });
  }
  addDropdowenSetting(settingName, options, display) {
    return new import_obsidian.Setting(this.containerEl).addDropdown((dropdown) => {
      var _a;
      const displayNames = /* @__PURE__ */ new Set();
      for (const option of options) {
        const displayName = (_a = display == null ? void 0 : display(option)) != null ? _a : option;
        if (!displayNames.has(displayName)) {
          dropdown.addOption(option, displayName);
          displayNames.add(displayName);
        }
      }
      ;
      dropdown.setValue(this.plugin.settings[settingName]).onChange(async (value) => {
        this.plugin.settings[settingName] = value;
        await this.plugin.saveSettings();
      });
    });
  }
  addSliderSetting(settingName, min, max, step) {
    return new import_obsidian.Setting(this.containerEl).addSlider((slider) => {
      slider.setLimits(min, max, step).setValue(this.plugin.settings[settingName]).setDynamicTooltip().onChange(async (value) => {
        this.plugin.settings[settingName] = value;
        await this.plugin.saveSettings();
      });
    });
  }
  addHeading(heading) {
    return new import_obsidian.Setting(this.containerEl).setName(heading).setHeading();
  }
  display() {
    this.containerEl.empty();
    this.addHeading("Paragraphs");
    this.addToggleSetting("paragraph").setName("Enable rendering");
    this.addSliderSetting("paragraphLines", 0, 10, 1).setName("Maximum number of lines to render").setDesc("Set to 0 to render all lines.");
    this.addHeading("Headings");
    this.addToggleSetting("heading").setName("Enable rendering");
    this.addHeading("Callouts");
    this.addToggleSetting("callout").setName("Enable rendering");
    this.addSliderSetting("calloutLines", 0, 10, 1).setName("Maximum number of lines to render").setDesc("Set to 0 to render all lines. You can render callout titles only by setting this to 1.");
    this.addHeading("Blockquotes");
    this.addToggleSetting("blockquote").setName("Enable rendering");
    this.addSliderSetting("blockquoteLines", 0, 10, 1).setName("Maximum number of lines to render").setDesc("Set to 0 to render all lines.");
    this.addHeading("Code blocks");
    this.addToggleSetting("code").setName("Enable rendering");
    this.addSliderSetting("codeLines", 0, 10, 1).setName("Maximum number of lines to render").setDesc("Set to 0 to render all lines.");
    this.addHeading("Math blocks");
    this.addToggleSetting("math").setName("Enable rendering");
    this.addHeading("List items");
    this.addToggleSetting("listItem").setName("Enable rendering");
    this.addSliderSetting("listItemLines", 0, 10, 1).setName("Maximum number of lines to render").setDesc("Set to 0 to render all lines.");
    this.addHeading("Tables");
    this.addToggleSetting("table").setName("Enable rendering");
    this.addSliderSetting("tableLines", 0, 10, 1).setName("Maximum number of lines to render").setDesc("Set to 0 to render all lines.");
    this.addHeading("Comments");
    this.addToggleSetting("comment").setName("Enable rendering");
    this.addSliderSetting("commentLines", 0, 10, 1).setName("Maximum number of lines to render").setDesc("Set to 0 to render all lines.");
    this.addHeading("Footnote definitions");
    this.addToggleSetting("footnoteDefinition").setName("Enable rendering").setDesc("Note that this plugin currently does not neccesarily work well along with footnotes. It is recommended to turn this off for now.");
    this.addSliderSetting("footnoteDefinitionLines", 0, 10, 1).setName("Maximum number of lines to render").setDesc("Set to 0 to render all lines.");
    this.addHeading("Other elements");
    this.addToggleSetting("element").setName("Enable rendering");
    this.addSliderSetting("elementLines", 0, 10, 1).setName("Maximum number of lines to render").setDesc("Set to 0 to render all lines.");
    this.addHeading("Embeds");
    this.addToggleSetting("iembed").setName("Render embedded content");
    this.addHeading("Debug mode (advanced)");
    this.addToggleSetting("dev").setName("Show selected suggestion in console");
    this.addToggleSetting("disableClose", (disable) => {
      const suggest = this.plugin.getBuiltInSuggest();
      if (!disable)
        suggest.close();
    }).setName("Prevent the suggestion box from closing").setDesc("Useful for inspecting the suggestion box DOM.");
  }
};

// src/utils.ts
function extractFirstNLines(text, n) {
  const lines = text.split("\n");
  return lines.slice(0, n).join("\n");
}
function render(el, cb) {
  const titleEl = el.querySelector(".suggestion-title");
  if (titleEl) {
    const containerEl = createDiv({ cls: ["markdown-preview-view", "markdown-rendered"] });
    titleEl.replaceChildren(containerEl);
    cb(containerEl);
  }
  ;
}
function getLeaves(treeRoot) {
  if (!treeRoot.children)
    return [treeRoot];
  return treeRoot.children.flatMap(getLeaves);
}

// src/main.ts
var EnhancedLinkSuggestionsPlugin = class extends import_obsidian2.Plugin {
  async onload() {
    await this.loadSettings();
    await this.saveSettings();
    this.addSettingTab(new EnhancedLinkSuggestionsSettingTab(this));
    this.app.workspace.onLayoutReady(() => {
      this.patchBuiltInSuggest();
      this.patchSetSelectedItem();
    });
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  getBuiltInSuggest() {
    return this.app.workspace.editorSuggest.suggests[0];
  }
  patchBuiltInSuggest() {
    const suggest = this.getBuiltInSuggest();
    const plugin = this;
    const app = this.app;
    this.register(around(suggest.constructor.prototype, {
      renderSuggestion(old) {
        return function(item, el) {
          old.call(this, item, el);
          el.setAttribute("data-item-type", item.type);
          if (item.type === "block") {
            el.setAttribute("data-item-node-type", item.node.type);
            if (plugin.settings[item.node.type] === false)
              return;
            const start = item.node.position.start.offset;
            const end = item.node.position.end.offset;
            let text = item.content.slice(start, end);
            let limit = plugin.settings[item.node.type + "Lines"];
            if (limit)
              text = extractFirstNLines(text, limit);
            if (item.node.type === "comment") {
              render(el, (containerEl) => {
                containerEl.setText(text);
              });
              return;
            }
            if (!plugin.settings.iembed) {
              const embeds = getLeaves(item.node).filter((leaf) => leaf.type === "iembed").sort((a, b) => b.position.start.offset - a.position.start.offset);
              for (const embed of embeds) {
                const embedStart = embed.position.start.offset - start;
                const embedEnd = embed.position.end.offset - start;
                text = text.slice(0, embedStart) + `<span class="cm-s-obsidian embed"><span class="cm-formatting-link"></span><span class="cm-hmd-internal-link">${text.slice(embedStart + 3, embedEnd - 2)}</span><span class="cm-formatting-link"></span></span>` + text.slice(embedEnd);
              }
            }
            render(el, async (containerEl) => {
              containerEl.setAttribute("data-line", item.node.position.start.line.toString());
              await import_obsidian2.MarkdownRenderer.render(app, text, containerEl, item.file.path, this.renderedBlockLinkSuggestionsComponent);
              containerEl.querySelectorAll(".copy-code-button").forEach((el2) => el2.remove());
              containerEl.querySelectorAll("span.cm-s-obsidian.embed > span.cm-formatting-link:first-child").forEach((el2) => {
                el2.textContent = "![[";
              });
              containerEl.querySelectorAll("span.cm-s-obsidian.embed > span.cm-formatting-link:last-child").forEach((el2) => {
                el2.textContent = "]]";
              });
            });
          }
        };
      },
      open(old) {
        return function() {
          if (!this.renderedBlockLinkSuggestionsComponent)
            this.renderedBlockLinkSuggestionsComponent = new import_obsidian2.Component();
          this.renderedBlockLinkSuggestionsComponent.load();
          old.call(this);
        };
      },
      close(old) {
        return function() {
          var _a;
          if (plugin.settings.disableClose)
            return;
          old.call(this);
          (_a = this.renderedBlockLinkSuggestionsComponent) == null ? void 0 : _a.unload();
        };
      }
    }));
  }
  patchSetSelectedItem() {
    const plugin = this;
    const suggest = this.getBuiltInSuggest();
    this.register(around(suggest.suggestions.constructor.prototype, {
      setSelectedItem(old) {
        return function(index, event) {
          const self = this;
          old.call(self, index, event);
          if (plugin.settings.dev)
            console.log(self.values[self.selectedItem]);
        };
      }
    }));
  }
};

/* nosourcemap */