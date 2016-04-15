// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.devtools.panels.elements.createSidebarPane(
  "Ractive Data",
  function(sidebar) {
    function update() {
        var query = 
            "(!$0 || !$0._ractive) ?" + //if no selected node or selected node is not ractive
                "{ info: 'Pick a Ractive managed node to see the context.' }" +
            ":" + //else
                "$0._ractive.root ?" +  //if ractive root is available (version 0.7)
                    "$0._ractive.root.get($0._ractive.keypath.str)" + 
                ":" + //else
                    "$0._ractive.fragment && $0._ractive.fragment.findContext ?" + //if version 0.8
                        "$0._ractive.fragment.findContext().get()" +
                    ":" + //else
                        "{ info: \'It looks like this is an incompatible Ractive version.\' }"
        
      sidebar.setExpression(query);
    }

    update();
    chrome.devtools.panels.elements.onSelectionChanged.addListener(update);
  }
);
