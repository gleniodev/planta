$(document).ready(function ($) {
  "use strict";
  $(
    "form.sistema input[elementRefresh], form.sistema select[elementRefresh], form.sistema textarea[elementRefresh]"
  ).on("change", function (e) {
    if (
      $(this).attr("elementRefresh") != "" &&
      $(this).attr("elementRefresh") != undefined
    ) {
      var elementRefresh = null;
      var SELF = this;
      var loading = false;
      if ($(this).attr("loading")) {
        loading = $(this).attr("loading");
        $(loading).show();
      }
      eval("elementRefresh = " + $(this).attr("elementRefresh"));
      if (elementRefresh.loading == true) {
        showAlert("Aguarde alguns instantes...");
      }
      atualizarElemento(
        elementRefresh.element,
        elementRefresh.url +
          "&" +
          $(this).attr("name") +
          "=" +
          $(this).val() +
          " " +
          elementRefresh.element,
        function () {
          if ($(loading).length) {
            $(loading).hide();
          }
          if (elementRefresh.loading == true) {
            hideAlert();
          }
        }
      );
    }
  });
  $("form.sistema").on("submit", function (e) {
    showAlert("Aguarde alguns instantes...");
    var THIS = this;
    var milliseconds = new Date().getTime();
    var form = $(this).serializeObject();
    var processData = true;
    var contentType = "application/x-www-form-urlencoded";
    if ($(THIS).attr("enctype") == "multipart/form-data") {
      var formData = new FormData();
      processData = false;
      contentType = false;
      $(THIS)
        .find("input[type=file]")
        .each(function (i, o) {
          var file = [];
          $.each(o.files, function (key, val) {
            file[key] = val;
          });
          if (file.length == 1) {
            file = file[file.length - 1];
          }
          formData.append(o.name, file);
        });
      formData.append(form);
      formData.append("callback", "?");
    } else {
      formData = form;
    }
    $.ajax({
      type: "POST",
      url: this.action,
      async: true,
      cache: false,
      processData: processData,
      contentType: contentType,
      dataType: "json",
      data: formData,
      success: function (json) {
        if (typeof json.result === "object") {
          var jsonResp = json.result;
        } else {
          var jsonResp = json;
        }
        hideAlert();
        if (typeof json.error === "object" && json.error.data) {
          jsonResp = json.error.data;
        }
        var resultado = jsonResp.nr;
        if (jsonResp.msg == undefined && jsonResp.custom_msg != undefined) {
          jsonResp.msg = jsonResp.custom_msg;
        }
        $(THIS).find("input,select,textarea").removeClass("erro");
        if (jsonResp.validacoes != undefined && jsonResp.validacoes != "") {
          if (jsonResp.msg == undefined) {
            jsonResp.msg =
              "Não foi possível salvar os dados<br/>Confira no formulário os campos marcados em vermelho";
          }
          var erros = false;
          $.each(jsonResp, function (key, value) {
            var KEY = key;
            var VALOR = value;
            if (KEY == "validacoes" && VALOR != 0) {
              jsonResp.msg = jsonResp.msg
                ? jsonResp.msg
                : "Foi encontrado erros no formulário:";
              $.each(VALOR, function (key2, value2) {
                $.each(value2, function (key3, value3) {
                  erros = true;
                  jsonResp.msg =
                    jsonResp.msg +
                    "<br/>- " +
                    key2.charAt(0).toUpperCase() +
                    key2.slice(1) +
                    ": " +
                    value3;
                  $(THIS)
                    .find("[name='" + key2 + "']")
                    .addClass("erro");
                });
              });
            }
          });
          if (erros && jsonResp.msg != undefined) {
            jsonResp.msg = "<br/>" + jsonResp.msg;
          }
          if (jsonResp.fail_callback != undefined) {
            eval(jsonResp.fail_callback);
          }
        } else {
          if (jsonResp.msg == undefined) {
            if (jsonResp.nr > 0) {
              jsonResp.clearForm = true;
              jsonResp.msg = "Operação efetuada com sucesso!";
            } else {
              jsonResp.msg = "Nenhum registro foi salvo ou atualizado!";
            }
          }
        }
        jsonResp.msg = '<span class="overflow">' + jsonResp.msg + "</span>";
        if (jsonResp.clearForm != undefined && jsonResp.clearForm == "1") {
          $(THIS)
            .find(
              "input[type=tel],input[type=email],input:text, input:password, input:file, select, textarea"
            )
            .val("");
          $(THIS)
            .find("input:radio, input:checkbox")
            .removeAttr("checked")
            .removeAttr("selected");
        }
        if (jsonResp.autoredirect != undefined) {
          location.href = jsonResp.autoredirect;
        } else {
          if (jsonResp.redirect != undefined && jsonResp.msg != undefined) {
            if (jsonResp.target != undefined) {
              showAlert(
                jsonResp.msg,
                jsonResp.redirect,
                undefined,
                jsonResp.target
              );
            } else {
              showAlert(jsonResp.msg, jsonResp.redirect);
            }
          } else {
            if (jsonResp.redirect != undefined && jsonResp.msg == undefined) {
              location.href = jsonResp.redirect;
            }
            if (jsonResp.msg != undefined && jsonResp.redirect == undefined) {
              showAlert(jsonResp.msg, "hideAlert(); return false");
            }
          }
        }
        if (jsonResp.nr > 0) {
          if (jsonResp.sucess_callback != undefined) {
            eval(jsonResp.sucess_callback);
          }
        } else {
          if (jsonResp.fail_callback != undefined) {
            eval(jsonResp.fail_callback);
          }
        }
        return false;
      },
      handleError: function (s, xhr, status, e) {
        hideAlert();
        showAlert(
          "Erro ao tentar fazer a requisição.",
          "hideAlert(); return false"
        );
        return false;
      },
    });
    return false;
  });
  $("body").delegate("input.cpf", "keyup", function (e) {
    return txtBoxFormat($(this).attr("id"), "999.999.999-99", e);
  });
  $("body").delegate("input.cnpj", "keyup", function (e) {
    return txtBoxFormat($(this).attr("id"), "99.999.999/9999-99", e);
  });
  $("body").delegate("input.cep", "keyup", function (e) {
    return txtBoxFormat($(this).attr("id"), "99999-999", e);
  });
  $("body").delegate("input.mesano", "keyup", function (e) {
    return txtBoxFormat($(this).attr("id"), "99/9999", e);
  });
  $("body").delegate("input.date", "keyup", function (e) {
    return txtBoxFormat($(this).attr("id"), "99/99/9999", e);
  });
  $("body").delegate("input.datetime", "keyup", function (e) {
    return txtBoxFormat($(this).attr("id"), "99/99/9999 99:99:99", e);
  });
  $("body").delegate("input.cep", "keyup", function (e) {
    if ($(this).val().length == 9) {
      webServiceCep($(this));
    }
  });
  $("body").delegate("input.inteiro", "keyup", function (e) {
    var maxlength = $(this).attr("maxlength");
    if (maxlength !== undefined) {
      var mask = "";
      for (var i = 0; i <= parseInt(maxlength); i++) {
        mask += "9";
      }
    } else {
      mask = "999999999";
    }
    return txtBoxFormat($(this).attr("id"), mask, e);
  });
  $("body").delegate("input.moeda", "keyup", function (e) {
    return MascaraMoeda($(this)[0], "", ".", e);
  });
  $("body").delegate("input.fone", "keyup", function (e) {
    if ($(this).val().length <= 14) {
      return txtBoxFormat($(this).attr("id"), "(99) 9999-9999", e);
    } else {
      return txtBoxFormat($(this).attr("id"), "(99) 99999-9999", e);
    }
  });
  $("body").delegate("input.telefone", "keyup", function (e) {
    if ($(this).val().length <= 14) {
      return txtBoxFormat($(this).attr("id"), "(99) 9999-9999", e);
    } else {
      return txtBoxFormat($(this).attr("id"), "(99) 99999-9999", e);
    }
  });
  $.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
      if (o[this.name]) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || "");
      } else {
        o[this.name] = this.value || "";
      }
    });
    return o;
  };
  $.each($(".map"), function () {
    if ($(this).attr("target") == "_system") {
      if (
        navigator.platform.indexOf("iPhone") != -1 ||
        navigator.platform.indexOf("iPad") != -1 ||
        navigator.platform.indexOf("iPod") != -1
      ) {
        $(this).attr(
          "href",
          "maps://" +
            $(this).attr("lat") +
            "," +
            $(this).attr("long") +
            "?q=" +
            $(this).attr("end")
        );
      } else {
        $(this).attr(
          "href",
          "geo://" +
            $(this).attr("lat") +
            "," +
            $(this).attr("long") +
            "?q=" +
            $(this).attr("end")
        );
      }
    }
  });
});
var buscandoCEP = false;
function webServiceCep(obj) {
  var cep = $(obj).val().replace("-", "").replace("_", "");
  var prefix = "";
  if (cep && $(obj).attr("buscando") != "true") {
    if ($(obj).attr("name").indexOf("_") > 0) {
      prefix = $(obj)
        .attr("name")
        .substr(0, $(obj).attr("name").indexOf("_") + 1);
    }
    var acao = $(obj).parents("form").eq(0).find('input[name="acao"]');
    if ($(obj).attr("buscando") != "true") {
      $(obj).attr("buscando", "true");
      if ($(acao).length == 1 && $(acao).val() == "update") {
        if (
          !confirm("Você deseja consultar este cep e auto-preencher os campos?")
        ) {
          $(obj).attr("buscando", "false");
          return false;
        }
      }
      var endereco = $(obj)
        .parents("form")
        .eq(0)
        .find('input[name="' + prefix + 'endereco"]');
      var rua = $(obj)
        .parents("form")
        .eq(0)
        .find('input[name="' + prefix + 'rua"]');
      var logradouro = $(obj)
        .parents("form")
        .eq(0)
        .find('input[name="' + prefix + 'logradouro"]');
      var bairro = $(obj)
        .parents("form")
        .eq(0)
        .find('input[name="' + prefix + 'bairro"]');
      var num = $(obj)
        .parents("form")
        .eq(0)
        .find('input[name="' + prefix + 'num"]');
      var numero = $(obj)
        .parents("form")
        .eq(0)
        .find('input[name="' + prefix + 'numero"]');
      var cidade_sel = $(obj)
        .parents("form")
        .eq(0)
        .find('select[name="' + prefix + 'cidade"]');
      var cidade = $(obj)
        .parents("form")
        .eq(0)
        .find('input[name="' + prefix + 'cidade"]');
      var estado = $(obj)
        .parents("form")
        .eq(0)
        .find('input[name="' + prefix + 'estado"]');
      var uf = $(obj)
        .parents("form")
        .eq(0)
        .find('input[name="' + prefix + 'uf"]');
      var uf_sel = $(obj)
        .parents("form")
        .eq(0)
        .find('select[name="' + prefix + 'uf"]');
      $.ajax({
        url:
          "./painel/plugins/AjaxgetCep.php?cep=" +
          $(obj).val().replace("-", ""),
        dataType: "json",
      })
        .done(function (data) {
          if (!data.error) {
            if ($(bairro).length == 1) {
              $(bairro).eq(0).val(data.result.bairro);
            }
            if ($(estado).length == 1) {
              $(estado).eq(0).val(data.result.uf);
            } else {
              if ($(uf).length == 1) {
                $(uf).eq(0).val(data.result.uf);
              } else {
                if ($(uf_sel).length == 1) {
                  $(uf_sel)
                    .find("option")
                    .filter(function () {
                      return (
                        $(this).html() ==
                        retirarAcento(data.result.uf).toUpperCase()
                      );
                    })
                    .eq(0)
                    .attr("selected", "selected");
                  if ($(cidade_sel).length == 1) {
                    if (
                      $(uf_sel).attr("elementRefresh") != "" &&
                      $(uf_sel).attr("elementRefresh") != undefined
                    ) {
                      var elementRefresh = null;
                      eval(
                        "elementRefresh = " + $(uf_sel).attr("elementRefresh")
                      );
                      atualizarElemento(
                        elementRefresh.element,
                        elementRefresh.url +
                          "&" +
                          $(uf_sel).attr("name") +
                          "=" +
                          $(uf_sel).val() +
                          " " +
                          elementRefresh.element,
                        function () {
                          $('select[name="' + prefix + 'cidade"]')
                            .find("option")
                            .filter(function () {
                              return (
                                retirarAcento($(this).html()).toUpperCase() ==
                                retirarAcento(data.result.cidade).toUpperCase()
                              );
                            })
                            .eq(0)
                            .attr("selected", "selected");
                          if (
                            $('input[name="' + prefix + 'num"]').length == 1
                          ) {
                            $('input[name="' + prefix + 'num"]')
                              .eq(0)
                              .focus();
                          } else {
                            if (
                              $('input[name="' + prefix + 'numero"]').length ==
                              1
                            ) {
                              $('input[name="' + prefix + 'numero"]')
                                .eq(0)
                                .focus();
                            }
                          }
                        }
                      );
                    }
                  }
                }
              }
            }
            if ($(cidade).length == 1) {
              $(cidade).eq(0).val(data.result.cidade);
            }
            if ($(rua).length == 1) {
              $(rua)
                .eq(0)
                .val(data.result.tipo + " " + data.result.logradouro);
            } else {
              if ($(endereco).length == 1) {
                $(endereco)
                  .eq(0)
                  .val(data.result.tipo + " " + data.result.logradouro);
              } else {
                if ($(logradouro).length == 1) {
                  $(logradouro)
                    .eq(0)
                    .val(data.result.tipo + " " + data.result.logradouro);
                }
              }
            }
            if ($(num).length == 1) {
              $(num).eq(0).focus();
            } else {
              if ($(numero).length == 1) {
                $(numero).eq(0).focus();
              }
            }
          } else {
            alert("Erro na busca do cep: " + data.error.message);
          }
        })
        .fail(function (jqXHR, textStatus) {
          alert("Erro na busca do cep: " + textStatus);
        })
        .always(function () {
          $(obj).attr("buscando", "false");
        });
    }
  }
}
function strpos(haystack, needle, offset) {
  var i = (haystack + "").indexOf(needle, offset || 0);
  return i === -1 ? false : i;
}
function print_r(arr, text, tab) {
  var text = text ? text : "Array \n(",
    tab = tab ? tab : "\t";
  for (key in arr)
    if (typeof arr[key] == "object")
      text = print_r(
        arr[key],
        text + "\n" + tab + "[" + key + "] => Array \n" + tab + "(",
        "\t" + tab
      );
    else text += "\n" + tab + "[" + key + "] => " + arr[key];
  text += "\n" + tab.substr(0, tab.length - 1) + ")\n";
  return text;
}
function is_array(input) {
  return typeof input == "object" && input instanceof Array;
}
function showAlert(msg, link, cancel, target) {
  if (link != undefined) {
    link2 = link.split("(");
    if (is_array(link2) && link2.length > 1) {
      try {
        link2[0] = eval(link2[0]);
      } catch (err) {}
    }
  }
  if (link == undefined) {
    $("body").prepend(
      '<div id="alertaMsg"><div></div><p><img src="assetsUni/img/ajax-loading.gif"/><br/>' +
        msg +
        "</p></div>"
    );
    $("div#alertaMsg div").fadeTo(0, 0.7);
  } else if (typeof link2[0] == "function") {
    if (cancel == undefined) {
      $("body").prepend(
        '<div id="alertaMsg"><div></div><p>' +
          msg +
          '<br/><br/><a href="#" onclick="' +
          link +
          '; hideAlert();">OK</a></p></div>'
      );
    } else {
      $("body").prepend(
        '<div id="alertaMsg"><div></div><p>' +
          msg +
          '<br/><br/><a href="#" onclick="' +
          link +
          '; hideAlert();">OK</a> <a href="#" onclick="hideAlert();">Cancelar</a> </p></div>'
      );
    }
    $("div#alertaMsg div").fadeTo(0, 0.7);
  } else if (link.indexOf("$") >= 0) {
    if (cancel == undefined) {
      $("body").prepend(
        '<div id="alertaMsg"><div></div><p>' +
          msg +
          '<br/><br/><a href="#" onclick="eval(' +
          link +
          '); hideAlert();">OK</a></p></div>'
      );
    } else {
      $("body").prepend(
        '<div id="alertaMsg"><div></div><p>' +
          msg +
          '<br/><br/><a href="#" onclick="eval(' +
          link +
          '); hideAlert();">OK</a> <a href="#" onclick="hideAlert();">Cancelar</a> </p></div>'
      );
    }
    $("div#alertaMsg div").fadeTo(0, 0.7);
  } else {
    if (msg !== undefined) {
      if (link !== undefined) {
        $("body").prepend(
          '<div id="alertaMsg"><div></div><p>' +
            msg +
            '<br/><br/><a href="' +
            link +
            '" ' +
            (target != undefined
              ? 'target="' + target + '" onclick="hideAlert();"'
              : "") +
            ">OK</a></p></div>"
        );
        $("div#alertaMsg div").fadeTo(0, 0.7);
      } else {
        $("body").prepend(
          '<div id="alertaMsg"><div></div><p>' +
            msg +
            '<br/><br/><a href="#" onclick="hideAlert(); return false;">OK</a></p></div>'
        );
        $("div#alertaMsg div").fadeTo(0, 0.7);
      }
    } else {
      $("body").prepend(
        '<div id="alertaMsg"><div></div><p>Dados enviados com sucesso!<br/><br/><a href="' +
          link +
          '" ' +
          (target != undefined
            ? 'target="' + target + '" onclick="hideAlert();"'
            : "") +
          ">OK</a></p></div>"
      );
      $("div#alertaMsg div").fadeTo(0, 0.7);
    }
  }
  return false;
}
function hideAlert(_callback) {
  $("#alertaMsg").remove();
  if (_callback !== undefined) {
    _callback();
  }
  return false;
}
function inArray(needle, haystack) {
  var length = haystack.length;
  for (var i = 0; i < length; i++) {
    if (haystack[i] == needle) return true;
  }
  return false;
}
function txtBoxFormat(strField, sMask, evtKey, func) {
  var i, nCount, sValue, fldLen, mskLen, bolMask, sCod, nTecla;
  if (evtKey !== undefined) {
    if (window.event) {
      nTecla = evtKey.keyCode;
    } else if (evtKey.which) {
      nTecla = evtKey.which;
    }
  }
  if (nTecla != 8) {
    if (document.getElementById(strField) != null) {
      sValue = document.getElementById(strField).value;
    } else {
      sValue = strField.value;
    }
    fldLen = sValue.length;
    mskLen = sMask.length;
    if (mskLen && document.getElementById(strField).maxlength == undefined) {
      document.getElementById(strField).maxlength = mskLen;
    }
    if (fldLen > mskLen) {
      var i = 0;
      var str = "";
      var len = mskLen;
      while (i < mskLen) {
        str += "" + sValue.charAt(i);
        i++;
      }
      document.getElementById(strField).value = str;
      if (func != undefined && func != null) {
        func();
      }
      return false;
    }
    sValue = sValue.toString().replace(":", "");
    sValue = sValue.toString().replace(":", "");
    sValue = sValue.toString().replace("-", "");
    sValue = sValue.toString().replace("-", "");
    sValue = sValue.toString().replace(".", "");
    sValue = sValue.toString().replace(".", "");
    sValue = sValue.toString().replace("/", "");
    sValue = sValue.toString().replace("/", "");
    sValue = sValue.toString().replace("(", "");
    sValue = sValue.toString().replace("(", "");
    sValue = sValue.toString().replace(")", "");
    sValue = sValue.toString().replace(")", "");
    sValue = sValue.toString().replace(" ", "");
    sValue = sValue.toString().replace(" ", "");
    fldLen = sValue.length;
    mskLen = sMask.length;
    i = 0;
    nCount = 0;
    sCod = "";
    mskLen = fldLen - (evtKey.type == "keyup" ? 1 : 0);
    while (i <= mskLen) {
      bolMask =
        sMask.charAt(i) == "-" ||
        sMask.charAt(i) == "." ||
        sMask.charAt(i) == "/";
      bolMask =
        bolMask ||
        sMask.charAt(i) == "(" ||
        sMask.charAt(i) == ")" ||
        sMask.charAt(i) == ":" ||
        sMask.charAt(i) == " ";
      if (bolMask) {
        sCod += sMask.charAt(i);
        mskLen++;
      } else {
        if (
          sMask.charAt(i) == "9" &&
          inArray(sValue.charAt(nCount), [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "5",
            "6",
            "7",
            "8",
            "9",
          ])
        ) {
          sCod += sValue.charAt(nCount);
          nCount++;
        }
      }
      i++;
    }
    if (
      (nTecla == 9 || nTecla == undefined) &&
      document.getElementById(strField).value == ""
    ) {
      return true;
    }
    document.getElementById(strField).value = sCod;
  }
}
function verificaEquivalencias(strField, strField2) {
  if (
    document.getElementById(strField).value != getElementById(strField2).value
  ) {
    alert("As senhas não Conferem");
    document.getElementById(strField).focus();
    return false;
  }
  return true;
}
function MascaraMoeda(objTextBox, SeparadorMilesimo, SeparadorDecimal, e) {
  var sep = 0;
  var key = "";
  var i = (j = 0);
  var len = (len2 = 0);
  var strCheck = "0123456789";
  var aux = (aux2 = "");
  var whichCode = null;
  if (window.event) {
    whichCode = e.keyCode;
  } else if (e.which) {
    whichCode = e.which;
  }
  if (
    !(
      whichCode == 0 ||
      whichCode == 8 ||
      whichCode == 9 ||
      whichCode == 37 ||
      whichCode == 39 ||
      whichCode == null
    )
  ) {
    key = String.fromCharCode(whichCode);
    if (strCheck.indexOf(key) == -1) return false;
    len = objTextBox.value.length;
    for (i = 0; i < len; i++)
      if (
        objTextBox.value.charAt(i) != "0" &&
        objTextBox.value.charAt(i) != SeparadorDecimal
      )
        break;
    aux = "";
    for (; i < len; i++)
      if (strCheck.indexOf(objTextBox.value.charAt(i)) != -1)
        aux += objTextBox.value.charAt(i);
    aux += key;
    len = aux.length;
    if (len == 0) objTextBox.value = "";
    if (len == 1) objTextBox.value = "0" + SeparadorDecimal + "0" + aux;
    if (len == 2) objTextBox.value = "0" + SeparadorDecimal + aux;
    if (len > 2) {
      aux2 = "";
      for (j = 0, i = len - 3; i >= 0; i--) {
        if (j == 3) {
          aux2 += SeparadorMilesimo;
          j = 0;
        }
        aux2 += aux.charAt(i);
        j++;
      }
      objTextBox.value = "";
      len2 = aux2.length;
      for (i = len2 - 1; i >= 0; i--) objTextBox.value += aux2.charAt(i);
      objTextBox.value += SeparadorDecimal + aux.substr(len - 2, len);
    }
    return false;
  }
}
function MascaraPerc(objTextBox, SeparadorDecimal, e) {
  var sep = 0;
  var key = "";
  var i = (j = 0);
  var len = (len2 = 0);
  var strCheck = "0123456789";
  var aux = (aux2 = "");
  var whichCode = null;
  if (window.event) {
    whichCode = e.keyCode;
  } else if (e.which) {
    whichCode = e.which;
  }
  if (
    !(
      whichCode == 0 ||
      whichCode == 8 ||
      whichCode == 9 ||
      whichCode == 37 ||
      whichCode == 39 ||
      whichCode == null
    )
  ) {
    key = String.fromCharCode(whichCode);
    if (strCheck.indexOf(key) == -1) return false;
    len = objTextBox.value.length;
    for (i = 0; i < len; i++)
      if (
        objTextBox.value.charAt(i) != "0" &&
        objTextBox.value.charAt(i) != SeparadorDecimal
      )
        break;
    aux = "";
    for (; i < len; i++)
      if (strCheck.indexOf(objTextBox.value.charAt(i)) != -1)
        aux += objTextBox.value.charAt(i);
    aux += key;
    len = aux.length;
    if (len == 0) objTextBox.value = "";
    if (len == 1) objTextBox.value = "0" + SeparadorDecimal + "0" + aux;
    if (len == 2) objTextBox.value = "0" + SeparadorDecimal + aux;
    if (len > 2) {
      aux2 = "";
      for (j = 0, i = len - 3; i >= 0; i--) {
        if (j == 3) {
          return false;
          aux2 += SeparadorMilesimo;
          j = 0;
        }
        aux2 += aux.charAt(i);
        j++;
      }
      objTextBox.value = "";
      len2 = aux2.length;
      for (i = len2 - 1; i >= 0; i--) objTextBox.value += aux2.charAt(i);
      objTextBox.value += SeparadorDecimal + aux.substr(len - 2, len);
    }
    return false;
  }
}
function replaceAll(str, de, para) {
  var pos = str.indexOf(de);
  while (pos > -1) {
    str = str.replace(de, para);
    pos = str.indexOf(de);
  }
  return str;
}
function is_object(input) {
  return typeof input == "object";
}
function is_string(input) {
  return typeof input == "string";
}
function is_array(input) {
  return typeof input == "object" && input instanceof Array;
}
function retirarAcento(strText) {
  var varString = new String(strText);
  var stringAcentos = new String("àâêôûãõáéíóúçüÀÂÊÔÛÃÕÁÉÍÓÚÇÜ");
  var stringSemAcento = new String("aaeouaoaeioucuAAEOUAOAEIOUCU");
  var i = new Number();
  var j = new Number();
  var cString = new String();
  var varRes = "";
  for (i = 0; i < varString.length; i++) {
    cString = varString.substring(i, i + 1);
    for (j = 0; j < stringAcentos.length; j++) {
      if (stringAcentos.substring(j, j + 1) == cString) {
        cString = stringSemAcento.substring(j, j + 1);
      }
    }
    varRes += cString;
  }
  return varRes;
}
function atualizarElemento(element, url, _callback) {
  if ($(element).length !== undefined && $(element).length > 1) {
    element = $(element).eq($(element).length - 1);
  }
  var div_ELEMENT = element;
  if ($(element).attr("id") != undefined && url != undefined && url != "") {
    loadConteudo(element, url, "", "", "", function () {
      var encontrou = false;
      $.each(
        $(div_ELEMENT)
          .find("input, select, textarea")
          .not("input[type=hidden]"),
        function (i, el) {
          if ($(el).val() == "" && !encontrou) {
            $(el).focus();
            encontrou = true;
          }
        }
      );
      if (_callback != undefined) {
        if (typeof _callback == "string") {
          eval(_callback);
        } else {
          _callback();
        }
      }
    });
  }
}
function loadConteudo(div, url, msg, not_ajax, elementRefresh, _callBack) {
  try {
    if ($(div).length !== undefined && $(div).length > 1) {
      div = $(div).eq($(div).length - 1);
    }
    var date = new Date();
    var components = [
      date.getYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds(),
    ];
    var timeid = components.join("");
    $(div).css("overflow", "hidden");
    var urlLoaded = url;
    var contentLoaded = "";
    if (url.indexOf(" #") != -1) {
      urlLoaded = url.split(" #")[0];
      contentLoaded = url.split(" #")[1];
    }
    if (contentLoaded != "") {
      contentLoaded = replaceAll(replaceAll(contentLoaded, " ", ""), "#", "");
    }
    urlLoaded = urlLoaded.trim();
    contentLoaded = contentLoaded.trim();
    $.ajax({
      type: "POST",
      url: urlLoaded,
      cache: false,
      success: function (response) {
        if (
          contentLoaded != "" &&
          $(response).find("#" + contentLoaded).length
        ) {
          response = $(response)
            .find("#" + contentLoaded)
            .eq(0);
        }
        var THIS = div;
        var fadeoOutDone = $(THIS).fadeOut("fast").promise();
        fadeoOutDone.then(function () {
          $(THIS).html(response);
          if ($("select").length) {
            $.each($("select"), function (i, val) {
              var $el = $(val);
              if (!$el.val()) {
                $el.addClass("not_chosen");
              }
              $("body").delegate($el, "change", function () {
                if (!$el.val()) $el.addClass("not_chosen");
                else $el.removeClass("not_chosen");
              });
            });
          }
          if (
            $(THIS)
              .find("#" + $(THIS).attr("id"))
              .html() != undefined
          ) {
            $(THIS).html(
              $(THIS)
                .find("#" + $(THIS).attr("id"))
                .html()
            );
          }
          $(THIS).css("overflow", "");
          var fadeoInDone = $(THIS).fadeIn("fast").promise();
          fadeoInDone.then(function () {
            if ($(THIS).find("form.sistema").length) {
              $(THIS)
                .find("form.sistema")
                .eq(0)
                .find("input,select,textarea")
                .not("[type=hidden],[type=file],[type=image]")
                .eq(0)
                .focus();
            }
            if (_callBack != undefined) {
              _callBack();
            }
          });
          return true;
        });
        return true;
      },
      error: function (response) {
        alert("Reuisição falhou: " + response.statusText + ".", "erro");
      },
      timeout: function (response) {
        alert("Servidor demorou muito a responder.", "erro");
      },
      abort: function (response) {
        alert("Processamento abortado.", "erro");
      },
      complete: function () {},
    });
  } catch (exception) {
    alert(
      "Erro ao processar o carregamento do conteúdo!<br/>Consulte o administrador." +
        (exception.message ? "<br/>" + exception.message : ""),
      "alerta"
    );
  }
}
