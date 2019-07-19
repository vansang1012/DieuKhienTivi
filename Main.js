let tv=new Tivi();
let rm=new Remote();
tv.setCurrentChannel();
rm.togglePower(tv);
rm.switchChannel(tv,3);
console.log(tv.currentChannel);