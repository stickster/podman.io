% podman-start 1

## NAME

podman\-start - Start one or more containers

## SYNOPSIS

**podman start** [*options*] _container_ ...

**podman container start** [*options*] _container_ ...

## DESCRIPTION

Start one or more containers using container IDs or names as input. The _attach_ and _interactive_
options cannot be used to override the _--tty_ and _--interactive_ options from when the container
was created. Starting an already running container with the _--attach_ option, Podman simply
attaches to the container.

## OPTIONS

#### **--all**

Start all the containers created by Podman, default is only running containers.

#### **--attach**, **-a**

Attach container's STDOUT and STDERR. The default is false. This option cannot be used when
starting multiple containers.

@@option detach-keys

#### **--filter**, **-f**

Filter what containers are going to be started from the given arguments.
Multiple filters can be given with multiple uses of the --filter flag.
Filters with the same key work inclusive with the only exception being
`label` which is exclusive. Filters with different keys always work exclusive.

Valid filters are listed below:

| **Filter** | **Description**                                                                  |
| ---------- | -------------------------------------------------------------------------------- |
| id         | [ID] Container's ID (accepts regex)                                              |
| name       | [Name] Container's name (accepts regex)                                          |
| label      | [Key] or [Key=Value] Label assigned to a container                               |
| exited     | [Int] Container's exit code                                                      |
| status     | [Status] Container's status: 'created', 'exited', 'paused', 'running', 'unknown' |
| ancestor   | [ImageName] Image or descendant used to create container                         |
| before     | [ID] or [Name] Containers created before this container                          |
| since      | [ID] or [Name] Containers created since this container                           |
| volume     | [VolumeName] or [MountpointDestination] Volume mounted in container              |
| health     | [Status] healthy or unhealthy                                                    |
| pod        | [Pod] name or full or partial ID of pod                                          |
| network    | [Network] name or full ID of network                                             |

@@option interactive

@@option latest

@@option sig-proxy

The default is **true** when attaching, **false** otherwise.

## EXAMPLE

podman start mywebserver

podman start 860a4b231279 5421ab43b45

podman start --interactive --attach 860a4b231279

podman start -i -l

## SEE ALSO

**[podman(1)](podman.md)**

## HISTORY

November 2018, Originally compiled by Brent Baude <bbaude@redhat.com>
