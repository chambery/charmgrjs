TAFFY = require('taffy');
fs = require('fs');
require('../resources/feats-pf.js');
require('../resources/misc.js');
require('../resources/armors.js');
require('../resources/weapons.js');
require('../resources/races.js');
require('../resources/classes.js');
async = require('async');
// env = require('jsdom').env
// $ = require('jquery');

// fs.readFile("", 'utf8', sort_feats(err,data));

import_feats();

var printed = {};
var order = [];

var all_feats = feats().get();

  console.log("\n\n\tBefore sorting");
  all_feats.forEach( function(feat, n) {
    if (!feat.hidden) {
      console.log(feat.name);
    }
  });

all_feats.sort(function (a, b)
{
    return (a.prereqs == undefined || a.prereqs.feats == undefined) && (a.name < b.name) ? -1 : 1;
});

  console.log("\n\n\tAfter sorting");
  all_feats.forEach( function(feat, n) {
    if (!feat.hidden) {
      console.log(feat.name);
    }
  });
// sort_feats(err, data)
// {

//console.log("\n\n---**# IN PREREQ ORDER #**---");
//var all_feats = TAFFY(feats().get())
all_feats.forEach(function (feat, n)
{
    console.log(feat.name);
    if (!feat.hidden)
    {
        create_feat_listing(feat, 0);
    }
});
console.log("\n\n\n\n");

order.forEach(function (name, i)
{
    console.log(printed[name] + name);
});

function create_feat_listing(feat, indent)
{
    var count = indent;
    if (feat.prereqs && feat.prereqs.feats)
    {
        var prereq = feats({name: feat.prereqs.feats[0]}).first();
        indent = create_feat_listing(prereq, indent + 1);
    }

    var tab = "";
    for (var i = 0; i < indent - count; i++)
    {
        tab = tab + "\t";
    }
    ;

    if (printed[feat.name] == null)
    {
        var idx = order.length - 1;
        //console.log(tab + feat.name);
        if (feat.prereqs && feat.prereqs.feats)
        {
            idx = order.indexOf(feat.prereqs.feats[0]);
        }
        order.splice(idx + 1, 0, feat.name);
        printed[feat.name] = tab;
    }

    return indent;
}

function import_feats()
{
    feats().each(function (feat, n)
    {
        if (feat.multi)
        {
            feat.multi.db = eval(feat.multi.db);
            feat.multi.type = eval(feat.multi.type);
        }
        if (feat.collection)
        {
            feat.collection.db = eval(feat.collection.db);
        }
        if (feat.attack)
        {
            feat.attack = new Function("attacks", "weapon", feat.attack);
        }
        if (feat.damage)
        {
            feat.damage = new Function("damages", "weapon", feat.damage);
        }
        if (feat.critical)
        {
            feat.critical = new Function("critical", feat.critical);
        }
        if (feat.init)
        {
            feat.init = new Function("init", feat.init);
        }
        if (feat.fort)
        {
            feat.fort = new Function("fort", feat.fort);
        }
        if (feat.ref)
        {
            feat.ref = new Function("ref", feat.ref);
        }
        if (feat.will)
        {
            feat.will = new Function("will", feat.will);
        }
        if (feat.ac)
        {
            feat.ac = new Function("ac", feat.ac);
        }
        if (feat.mobility)
        {
            feat.mobility = new Function("acp", feat.mobility);
        }

        for (classname in feat.classes)
        {
            var clazz = classes({name: classname}).first();
            clazz.feats[feat.classes[classname]].push(feat.name);
        }

        return feat;
    });
}
