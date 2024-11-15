// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {


    rotationSpeed: number = 1;
    
    private angle: number = 0; 
    private radius: number = 200;
    private bool: boolean = false;

    start() {
    }

    onclick(){
        
        this.bool = !this.bool;
    
    }

    update(deltaTime) {
        
        if(this.bool){
            this.angle += this.rotationSpeed * deltaTime;

            const x = this.radius * Math.cos(this.angle);
            const y = this.radius * Math.sin(this.angle);
            this.node.setPosition(x,y);
        }

    }

}
