% podman-machine-set 1

## NAME

podman\-machine\-set - Sets a virtual machine setting

## SYNOPSIS

**podman machine set** [*options*] [*name*]

## DESCRIPTION

Change a machine setting.

Rootless only.

## OPTIONS

#### **--cpus**=_number_

Number of CPUs.
Only supported for QEMU machines.

#### **--disk-size**=_number_

Size of the disk for the guest VM in GB.
Can only be increased. Only supported for QEMU machines.

#### **--help**

Print usage statement.

#### **--memory**, **-m**=_number_

Memory (in MB).
Only supported for QEMU machines.

#### **--rootful**

Whether this machine should prefer rootful (`true`) or rootless (`false`)
container execution. This option will also update the current podman
remote connection default if it is currently pointing at the specified
machine name (or `podman-machine-default` if no name is specified).

@@option user-mode-networking

Unlike [**podman system connection default**](commands/podman-system-connection/podman-system-connection-default.md)
this option will also make the API socket, if available, forward to the rootful/rootless
socket in the VM.

## EXAMPLES

To switch the default VM `podman-machine-default` from rootless to rootful:

```
$ podman machine set --rootful
```

or more explicitly:

```
$ podman machine set --rootful=true
```

To switch the default VM `podman-machine-default` from rootful to rootless:

```
$ podman machine set --rootful=false
```

To switch the VM `myvm` from rootless to rootful:

```
$ podman machine set --rootful myvm
```

## SEE ALSO

**[podman(1)](podman.md)**, **[podman-machine(1)](commands/podman-machine/podman-machine.md)**

## HISTORY

February 2022, Originally compiled by Jason Greene <jason.greene@redhat.com>
