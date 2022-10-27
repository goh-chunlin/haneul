import _ from 'lodash';
import './ui-component.css';

import ComponentsLayout from "./layouts/components.layout";
import DesignTokenLayout from './layouts/design-token.layout';

import HomeView from "./home/home.view";
import BadgeView from "./components/badge/badge.view";
import ButtonView from "./components/button/button.view";
import CardView from "./components/card/card.view";
import CheckboxView from "./components/checkbox/checkbox.view";
import ChipView from "./components/chip/chip.view";
import ProgressView from "./components/progress/progress.view";
import RadioButtonView from "./components/radiobutton/radiobutton.view";
import SliderView from "./components/slider/slider.view";
import StepperView from "./components/stepper/stepper.view";
import SwitchView from './components/switch/switch.view';
import TabView from './components/tab/tab.view';
import TextFieldView from './components/textfield/textfield.view';
import TooltipView from './components/tooltip/tooltip.view';
import ColoursView from './design-token/colours/colours.view';

function init() {

    m.route(document.getElementsByTagName("body")[0], "/", {
        "/": HomeView,
        "/components/badge": loadWithLayout(ComponentsLayout, BadgeView),
        "/components/button": loadWithLayout(ComponentsLayout, ButtonView),
        "/components/card": loadWithLayout(ComponentsLayout, CardView),
        "/components/checkbox": loadWithLayout(ComponentsLayout, CheckboxView),
        "/components/chip": loadWithLayout(ComponentsLayout, ChipView),
        "/components/progress": loadWithLayout(ComponentsLayout, ProgressView),
        "/components/radiobutton": loadWithLayout(ComponentsLayout, RadioButtonView),
        "/components/slider": loadWithLayout(ComponentsLayout, SliderView),
        "/components/stepper": loadWithLayout(ComponentsLayout, StepperView),
        "/components/switch": loadWithLayout(ComponentsLayout, SwitchView),
        "/components/tab": loadWithLayout(ComponentsLayout, TabView),
        "/components/textfield": loadWithLayout(ComponentsLayout, TextFieldView),
        "/components/tooltip": loadWithLayout(ComponentsLayout, TooltipView),

        "/design-token/colours": loadWithLayout(DesignTokenLayout, ColoursView),
    });

    function loadWithLayout(layout, view) {
        return {
            render: function (vnode) {
                // To redraw (without triggering oninit)
                return m(layout, m(view));
            },
        };
    }
}

window.onload = init;