let Remote=function () {
    this.ma;
    this.setMa=function () {
        this.ma=ma;
    };
    this.togglePower=function (tv) {
        tv.togglePower();
    };
    this.switchChannel=function (tv,index) {
        tv.setChannel(index);
    };
    this.setVolumeUp=function (tv) {
        tv.setVolumeUp();
        
    };
    this.setVolumeDown=function (tv) {
        tv.setVolumeDown();

    }
}