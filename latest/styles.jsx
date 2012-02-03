﻿// styles.jsx// Copyright (C) 2012 Fabian "fabiantheblind" Morón Zirfas// http://www.the-moron.net// http://fabiantheblind.info/// info [at] the - moron . net// This program is free software: you can redistribute it and/or modify// it under the terms of the GNU General Public License as published by// the Free Software Foundation, either version 3 of the License, or// any later version.// This program is distributed in the hope that it will be useful,// but WITHOUT ANY WARRANTY; without even the implied warranty of// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the// GNU General Public License for more details.// You should have received a copy of the GNU General Public License// along with this program.  If not, see http://www.gnu.org/licenses/function styles_builder(doc){var objSt1  = doc.objectStyles.add();objSt1.properties = {		name:"imagesBlend",		strokeWeight: 0,		strokeColor:doc.swatches.item(3),		strokeTint: 23,		transparencySettings:{				blendingSettings:{					opacity:100					}				}		};var objSt3  = doc.objectStyles.add();objSt3.properties = {		name:"overlay",		strokeWeight: 5,        strokeAlignment:StrokeAlignment.CENTER_ALIGNMENT,		  transparencySettings:{				blendingSettings:{					blendMode: BlendMode.COLOR					}				}		};	var objSt4  = doc.objectStyles.add();objSt4.properties = {		name:"image_id",		strokeWeight: 0		};var oStyles = new Array();for(var c = 0; c  < meta.highlite.length;c++){	oStyles.push({"name":"images","id":meta.highlite[c].name});		}					for(var o = 0; o < oStyles.length;o++){		var objSt  = doc.objectStyles.add();		objSt.properties = {			name:oStyles[o].name + " " + oStyles[o].id,			strokeWeight: 0,			fillColor:doc.swatches.item(2),			strokeColor:doc.swatches.item(oStyles[o].id+""),			strokeTint: 50		};	}	var cStyles = {	"styles":[ 			{"name":"h1" ,"font":"DejaVu Serif	Bold","factor":1.4},			{"name":"h2" ,"font":"DejaVu Serif	Bold Italic","factor":0.8},			{"name":"id" ,"font":"DejaVu Serif	Book","factor":1.1},			{"name":"body" ,"font":"DejaVu Serif	Book","factor":1},			{"name":"whitenoise" ,"font":"DejaVu Sans Mono	Book","factor":0.8},            {"name":"timespan" ,"font":"DejaVu Serif	Bold","factor":0.7},			{"name":"image ul" ,"font":"DejaVu Serif	Book","factor":0.6} ],			"base":10 };var vals = new Array();	  vals.push({"id":0,"fll":50});for(var v = 0; v < meta.db.projects.length;v++){		var fll = 50;	if(util_checkhighlite(meta.db.projects[v].id)){		fll =100;   		}else{	   fll = 50;	   }		  vals.push({"id":meta.db.projects[v].id,"fll":fll});		}// now make a double loop // for creating the chracter styles for(var s = 0; s < cStyles.styles.length;s++){ 	for(var v = 0; v < vals.length;v++){		var charStyle = doc.characterStyles.add({				name:cStyles.styles[s].name + " "+vals[v].id				});						if(v != 0){				charStyle.basedOn = doc.characterStyles.item(				cStyles.styles[s].name +" "+vals[0].id);				}//~ 			var base = 0;			if(cStyles.styles[s].name.match("image ul")){//~ 			base = 9;			                if(vals[v].fll == 100)vals[v].fll = 50;             charStyle.baselineShift = 1;			}else{//~ 			base = cStyles.base;								}                    if(cStyles.styles[s].name.match("timespan")){//~ 			base = 9;			                vals[v].fll = 100;        }                                      			charStyle.properties = {				appliedFont : cStyles.styles[s].font,				pointSize: cStyles.base * cStyles.styles[s].factor,				fillTint: vals[v].fll				};			if(util_checkhighlite(vals[v].id)!=true){               if(cStyles.styles[s].name.match("h1") || cStyles.styles[s].name.match("h2")||cStyles.styles[s].name.match("body")){                   charStyle.pointSize = 10;                   }		}//~ 			if(cStyles.styles[s].name.match("id")){//~ 				charStyle.fillColor = doc.swatches.item(vals[v].id+"");//~ 				}			if(cStyles.styles[s].name.match("body")){				charStyle.leading = 12;				}                        		}// close v loop }// close s loop					//~ 	var timespan = doc.charactrerStyles.add({name:"timespan"});//~     timespan.properties =  {pointSize:7,appliedFont:"DejaVu Serif	Bold",fillTint:42};//~	 var idStyles = new Array();//~	 for(var p = 0; p < meta.db.projects.length; p++){//~		try{ var cst = doc.characterStyles.add({name:"id " +meta.db.projects[p].id});//~		 cst.basedOn = doc.characterStyles.item("h2");//~		 cst.fillColor = doc.swatches.item(meta.db.projects[p].id+"");//~		 }catch(e){alert("in here");}//~		 //~		 }		var parBody = doc.paragraphStyles.add({name:"body"});//~ 	parBody.alignToBaseline = true;    	var head = doc.paragraphStyles.add({name:"head"});	head.properties = {pointSize:42,appliedFont:"DejaVu Serif	Bold"};          var pghead_L = doc.paragraphStyles.add({name:"pghead_left"});	pghead_L.properties = {pointSize:7,appliedFont:"DejaVu Serif	Bold",justification:Justification.LEFT_ALIGN};        var pghead_R = doc.paragraphStyles.add({name:"pghead_right"});	pghead_R.properties = {pointSize:7,appliedFont:"DejaVu Serif	Bold",justification:Justification.RIGHT_ALIGN}; var pagina = doc.paragraphStyles.add({name:"pagina",        pointSize:9,        appliedFont:"DejaVu Serif	Book",        justification:Justification.CENTER_ALIGN        });            var code = build_code_paragraphStyle (doc);    	}function build_code_paragraphStyle(d){var charStyles = new Array();var keywords = d.characterStyles.add({name:"keywords",fillColor:d.swatches.item(5)});var comments = d.characterStyles.add({name:"comments",fillColor:d.swatches.item(6)});var operators = d.characterStyles.add({name:"operators",fillColor:d.swatches.item(7)});var separators = d.characterStyles.add({name:"separators",fillColor:d.swatches.item(8)});var numbers = d.characterStyles.add({name:"numbers",fillColor:d.swatches.item(9)});var comment = d.characterStyles.add({name:"comment",fillColor:d.swatches.item(9)});var string = d.characterStyles.add({name:"strings",fillColor:d.swatches.item(5)});var code = d.paragraphStyles.add({name:"code",appliedFont:"DejaVu Sans Mono	Book"});//change language (only in the paragraphStyle) to get the right "" for the code		code.appliedLanguage = app.languagesWithVendors.item("English: USA")    var grp = code.nestedGrepStyles.add();        grp.appliedCharacterStyle = keywords;        grp.grepExpression = "abstract|boolean|break|byte|case|catch|char|class|const|continue|debugger|default|delete|do|double|else|enum|export|extends|false|final|finally|float|for|function|goto|if|implements|import|in|instanceof|int|interface|long|native|new|null|package|private|protected|public|return|short|static|super|switch|synchronized|this|throw|throws|transient|true|try|typeof|var|void|volatile|while|with";                grp = code.nestedGrepStyles.add();        grp.appliedCharacterStyle = operators;        grp.grepExpression = "is|new|sizeof|typeof";                grp = code.nestedGrepStyles.add();        grp.appliedCharacterStyle = operators;        grp.grepExpression = "[-~\\[\\]!$%&*+/:<=>?^|]+";                grp = code.nestedGrepStyles.add();        grp.appliedCharacterStyle = separators;        grp.grepExpression = "[(){},;\\s]+";                grp = code.nestedGrepStyles.add();        grp.appliedCharacterStyle = numbers;        grp.grepExpression = "\\<[0-9]+(\\.[0-9]+)?([eE][-+]?[0-9]+)?";                grp = code.nestedGrepStyles.add();        grp.appliedCharacterStyle = comments;        grp.grepExpression = "/\\*+[^*]*\\*+([^/*][^*]*\\*+)*/";                                grp = code.nestedGrepStyles.add();        grp.appliedCharacterStyle = comment;        grp.grepExpression = "//.*";                        grp = code.nestedGrepStyles.add();        grp.appliedCharacterStyle = string;        grp.grepExpression = "\".*?\"";                   return code;                }