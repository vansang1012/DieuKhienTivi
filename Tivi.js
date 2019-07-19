const MAX_VOLUME=100;
const MIN_VOLUME=0;

let Tivi=function () {
    this.currentChannel;
    this.volume=0;
    this.isOn;
    this.isOff;

    this.togglePower=function () {
        return this.currentChannel;
    }
    this.setChannel=function (index) {
        if (!this.getIsOn()) return;
        this.currentChannel = index;
    }

    this.setCurrentChannel=function (index) {
        this.currentChannel=index;
    }
    this.getCurrentChannel=function () {
       return  this.currentChannel
    }
    this.getVolume=function () {
        return this.volume;
    }
    this.setIsOn=function () {
        this.isOn=true;
    }
    this.getIsOn=function () {
        return this.isOn;
    }
    this.setIsOff=function () {
        this.isOff=false;
    }
    this.setVolumeDown=function () {
        if (this.volume > MIN_VOLUME) {
            this.volume--;
        }
    }
    this.setVolumeUp=function () {
        if (this.volume<MAX_VOLUME){
            this.volume ++;
        }
    }


}