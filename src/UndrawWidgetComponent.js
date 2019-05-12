import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent('UndrawWidget', ({ widget }) => {

  const cssclass = [widget.get('svg') || 'photo'];
  cssclass.push('clippath');

  if (!cssclass.length && Scrivito.isInPlaceEditingActive()) {
    return (
        <h4 className="text-center">
          Provide the illustration in the widget properties.
        </h4>
    );
  }

  return (
          <Scrivito.ContentTag

              className={cssclass.join(" ")}
              content={widget}
              attribute="svg"
          />
  );
})




