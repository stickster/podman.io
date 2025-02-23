% podman-stop 1

## NAME

podman\-stop - Stop one or more running containers

## SYNOPSIS

**podman stop** [*options*] _container_ ...

**podman container stop** [*options*] _container_ ...

## DESCRIPTION

Stops one or more containers using container IDs or names as input. The **--time** option
specifies the number of seconds to wait before forcibly stopping the container after the stop command
is issued to the container. The default is 10 seconds. By default, containers are stopped with SIGTERM
and then SIGKILL after the timeout. The SIGTERM default can be overridden by the image used to create the
container and also via command line when creating the container.

## OPTIONS

#### **--all**, **-a**

Stop all running containers. This does not include paused containers.

@@option cidfile.read

#### **--filter**, **-f**=_filter_

Filter what containers are going to be stopped.
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

@@option ignore

@@option latest

@@option time

## EXAMPLES

$ podman stop mywebserver

$ podman stop 860a4b235279

$ podman stop mywebserver 860a4b235279

$ podman stop --cidfile /home/user/cidfile-1

$ podman stop --cidfile /home/user/cidfile-1 --cidfile ./cidfile-2

$ podman stop --time 2 860a4b235279

$ podman stop -a

$ podman stop --latest

## SEE ALSO

**[podman(1)](podman.md)**, **[podman-rm(1)](commands/podman-rm.md)**

## HISTORY

September 2018, Originally compiled by Brent Baude <bbaude@redhat.com>
