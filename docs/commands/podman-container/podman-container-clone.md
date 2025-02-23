% podman-container-clone 1

## NAME

podman\-container\-clone - Creates a copy of an existing container

## SYNOPSIS

**podman container clone** [*options*] _container_ _name_ _image_

## DESCRIPTION

**podman container clone** creates a copy of a container, recreating the original with an identical configuration. This command takes three arguments: the first being the container ID or name to clone, the second argument in this command can change the name of the clone from the default of $ORIGINAL_NAME-clone, and the third is a new image to use in the cloned container.

## OPTIONS

@@option blkio-weight

@@option blkio-weight-device

@@option cpu-period

If none is specified, the original container's cpu period is used

@@option cpu-quota

If none is specified, the original container's CPU quota are used.

@@option cpu-rt-period

If none is specified, the original container's CPU runtime period is used.

@@option cpu-rt-runtime

@@option cpu-shares

If none are specified, the original container's CPU shares are used.

#### **--cpus**

Set a number of CPUs for the container that overrides the original containers CPU limits. If none are specified, the original container's Nano CPUs are used.

This is shorthand
for **--cpu-period** and **--cpu-quota**, so only **--cpus** or either both the **--cpu-period** and **--cpu-quota** options can be set.

This option is not supported on cgroups V1 rootless systems.

@@option cpuset-cpus

If none are specified, the original container's CPUset is used.

@@option cpuset-mems

If none are specified, the original container's CPU memory nodes are used.

@@option destroy

@@option device-read-bps

@@option device-write-bps

#### **--force**, **-f**

Force removal of the original container that we are cloning. Can only be used in conjunction with **--destroy**.

@@option memory

If no memory limits are specified, the original container's will be used.

@@option memory-reservation

If unspecified, memory reservation will be the same as memory limit from the
container being cloned.

@@option memory-swap

If unspecified, the container being cloned will be used to derive
the swap value.

@@option memory-swappiness

#### **--name**

Set a custom name for the cloned container. The default if not specified is of the syntax: **<ORIGINAL_NAME>-clone**

#### **--pod**=_name_

Clone the container in an existing pod. It is helpful to move a container to an
existing pod. The container will join the pod shared namespaces, losing its configuration
that conflicts with the shared namespaces.

#### **--run**

When set to true, this flag runs the newly created container after the
clone process has completed, this specifies a detached running mode.

## EXAMPLES

```
# podman container clone d0cf1f782e2ed67e8c0050ff92df865a039186237a4df24d7acba5b1fa8cc6e7
6b2c73ff8a1982828c9ae2092954bcd59836a131960f7e05221af9df5939c584
```

```
# podman container clone --name=clone d0cf1f782e2ed67e8c0050ff92df865a039186237a4df24d7acba5b1fa8cc6e7
6b2c73ff8a1982828c9ae2092954bcd59836a131960f7e05221af9df5939c584
```

```
# podman container clone --destroy --cpus=5 d0cf1f782e2ed67e8c0050ff92df865a039186237a4df24d7acba5b1fa8cc6e7
6b2c73ff8a1982828c9ae2092954bcd59836a131960f7e05221af9df5939c584
```

```
# podman container clone 2d4d4fca7219b4437e0d74fcdc272c4f031426a6eacd207372691207079551de new_name fedora
Resolved "fedora" as an alias (/etc/containers/registries.conf.d/shortnames.conf)
Trying to pull registry.fedoraproject.org/fedora:latest...
Getting image source signatures
Copying blob c6183d119aa8 done
Copying config e417cd49a8 done
Writing manifest to image destination
Storing signatures
5a9b7851013d326aa4ac4565726765901b3ecc01fcbc0f237bc7fd95588a24f9
```

## SEE ALSO

**[podman-create(1)](commands/podman-create.md)**, **[cgroups(7)](https://man7.org/linux/man-pages/man7/cgroups.7.html)**

## HISTORY

January 2022, Originally written by Charlie Doern <cdoern@redhat.com>
