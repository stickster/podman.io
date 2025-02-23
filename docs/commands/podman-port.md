% podman-port 1

## NAME

podman\-port - List port mappings for a container

## SYNOPSIS

**podman port** [*options*] _container_ [_private-port_[/*proto*]]

**podman container port** [*options*] _container_ [_private-port_[/*proto*]]

## DESCRIPTION

List port mappings for the _container_ or look up the public-facing port that is NAT-ed to the _private-port_.

## OPTIONS

#### **--all**, **-a**

List all known port mappings for running containers; when using this option, container names or private ports/protocols filters cannot be used.

@@option latest

## EXAMPLE

List all port mappings

```
# podman port -a
b4d2f05432e482e017b1a4b2eae15fa7b4f6fb7e9f65c1bde46294fdef285906
80/udp -> 0.0.0.0:44327
80/tcp -> 0.0.0.0:44327
#
```

List port mappings for a specific container

```
# podman port b4d2f054
80/udp -> 0.0.0.0:44327
80/tcp -> 0.0.0.0:44327
#
```

List the port mappings for the latest container and port 80

```
# podman port b4d2f054 80
 0.0.0.0:44327
#
```

List the port mappings for a specific container for port 80 and the tcp protocol.

```
# podman port b4d2f054 80/tcp
0.0.0.0:44327
#
```

## SEE ALSO

**[podman(1)](podman.md)**, **[podman-inspect(1)](commands/podman-inspect.md)**

## HISTORY

January 2018, Originally compiled by Brent Baude <bbaude@redhat.com>
