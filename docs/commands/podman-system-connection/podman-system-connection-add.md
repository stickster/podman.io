% podman-system-connection-add 1

## NAME

podman\-system\-connection\-add - Record destination for the Podman service

## SYNOPSIS

**podman system connection add** [*options*] _name_ _destination_

## DESCRIPTION

Record ssh destination for remote podman service(s). The ssh destination is given as one of:

- [user@]hostname[:port]
- ssh://[user@]hostname[:port]
- unix://path
- tcp://hostname:port

The user will be prompted for the remote ssh login password or key file pass phrase as required. The `ssh-agent` is supported if it is running.

## OPTIONS

#### **--default**, **-d**

Make the new destination the default for this user. The default is **false**.

#### **--identity**=_path_

Path to ssh identity file. If the identity file has been encrypted, Podman prompts the user for the passphrase.
If no identity file is provided and no user is given, Podman defaults to the user running the podman command.
Podman prompts for the login password on the remote server.

#### **--port**, **-p**=_port_

Port for ssh destination. The default value is `22`.

#### **--socket-path**=_path_

Path to the Podman service unix domain socket on the ssh destination host

## EXAMPLE

```
$ podman system connection add QA podman.example.com

$ podman system connection add --identity ~/.ssh/dev_rsa production ssh://root@server.example.com:2222

$ podman system connection add testing unix:///run/podman/podman.sock

$ podman system connection add debug tcp://localhost:8080
```

## SEE ALSO

**[podman(1)](podman.md)**, **[podman-system(1)](commands/podman-system/podman-system.md)**, **[podman-system-connection(1)](commands/podman-system-connection/podman-system-connection.md)**

## HISTORY

June 2020, Originally compiled by Jhon Honce (jhonce at redhat dot com)
