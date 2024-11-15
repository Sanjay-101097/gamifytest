// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Prefab)
    element: cc.Prefab = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    count: number = 20;
    sliderval = 1;
    intervalId;

    start() {
        for (let i = 0; i < this.count; i++) {
            let node = cc.instantiate(this.element);
            node.parent = this.node;
            node.children[0].getComponent(cc.Label).string = (20 - i).toString();

            const randomRed = Math.floor(Math.random() * 256);
            const randomGreen = Math.floor(Math.random() * 256);
            const randomBlue = Math.floor(Math.random() * 256);
            const randomColor = new cc.Color(randomRed, randomGreen, randomBlue, 255);
            node.color = randomColor;
        }


    }

    onclick() {
        if (this.intervalId) return;
        this.intervalId = setInterval(() => {
            let child = this.node.children[this.node.children.length - 1];
            this.node.removeChild(child);
            setTimeout(() => {
                this.node.addChild(child, 0);
                child.setSiblingIndex(0);
                this.count += 1;
                child.children[0].getComponent(cc.Label).string = this.count.toString();
            }, 50 * this.sliderval)
        }, 100 * this.sliderval)
    }

    onSliderChange(slider: cc.Slider) {

        this.sliderval = 1 - slider.progress;
        if (this.sliderval == 0) {
            this.sliderval = 0.1;
        }
        clearInterval(this.intervalId);
        this.intervalId = null;

    }

    // update (dt) {}
}
