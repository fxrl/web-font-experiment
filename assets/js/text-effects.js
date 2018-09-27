const splitHeading = "Color Channel Split"
const liquidHeading = "Liquified Text"
const rollingHeading = "Glitching Text"

const splitText = new Blotter.Text(splitHeading, {
    family : "Libre Baskerville",
    size : 80,
    fill : "#171717"
});

const liquidText = new Blotter.Text(liquidHeading, {
    family : "Libre Baskerville",
    size : 80,
    fill : "#171717"
});

const rollingText = new Blotter.Text(rollingHeading, {
    family : "Libre Baskerville",
    size : 80,
    fill : "#171717"
});


const channelSlpit = new Blotter.ChannelSplitMaterial();
const rollingDistort = new Blotter.RollingDistortMaterial();

const liquidDistortion = new Blotter.LiquidDistortMaterial();
// liquid settings
liquidDistortion.uniforms.uSpeed.value = 0.2;
liquidDistortion.uniforms.uVolatility.value = .1;
liquidDistortion.uniforms.uSeed.value = 2.0;

var blotterLiquid = new Blotter(liquidDistortion, { texts : liquidText });
var blotterSplit = new Blotter(channelSlpit, { texts : splitText });
var blotterRoll = new Blotter(rollingDistort, { texts : rollingText });

var scopeThree = blotterLiquid.forText(liquidText);
var scopeTwo = blotterSplit.forText(splitText);
var scopeOne = blotterRoll.forText(rollingText);

const boxGlitch = document.getElementById('glitch');
const boxSplit = document.getElementById('split');
const boxRoll = document.getElementById('roll');
scopeOne.appendTo(boxGlitch);
scopeTwo.appendTo(boxSplit);
scopeThree.appendTo(boxRoll);