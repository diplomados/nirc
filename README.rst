########################################
nIRC
########################################

.. class:: no-web

    Servidor escuchar y entregar mensajes. Use estos servicios con un cliente como nirc_client_.


    .. image:: https://github.com/.. .png
        :alt: IRC
        :width: 100%
        :align: center



.. contents::

.. section-numbering::

.. raw:: pdf

   PageBreak oneColumn


============
Installation
============

-------------------
Dependencies
-------------------

- JQuery (not part of the bundle)




-------------------
Development version
-------------------

Clone **latest development version** directly from github_:

.. code-block:: bash
    
    # Universal
    
    E:\dev>git clone https://github.com/diplomados/nirc.git

Instale las dependencias::

    E:\dev>cd nirc
    E:\dev\nirc>npm install

Run the app in 9000 port::

    D:\dev\nirc>node server.js

       info  - socket.io started
    Express server running at
     => http://localhost:9000/
    CTRL + C to shutdown
    (node:224) DeprecationWarning: process.EventEmitter is deprecated. Use require('events') instead.
       debug - served static content /socket.io.js
       debug - client authorized
       info  - handshake authorized Fvz3Tkd3VFnwQFRO6sGz
       debug - setting request GET /socket.io/1/websocket/Fvz3Tkd3VFnwQFRO6sGz
       debug - set heartbeat interval for client Fvz3Tkd3VFnwQFRO6sGz
       debug - client authorized for
       debug - websocket writing 1::
    arrancado



====
Meta
====


-------
Licence
-------

BSD-3-Clause: `LICENSE <https://github.com/xx_group/xx_repo/blob/master/LICENSE>`_.



-------
Authors
-------

- Angel Sullon Macalupu (asullom@gmail.com)



-------
Contributors
-------

See https://github.com/iplomados/nirc/graphs/contributors

.. _nirc_client: https://github.com/diplomados/nirc_client
.. _nirc: https://github.com/diplomados/nirc







