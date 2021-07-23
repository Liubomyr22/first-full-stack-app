import "./sidebar.css";
export default function SideBar() {
  return (
    <section className="sidebar">
      <div className="sidebarTitle">
        <span>ABOUT ME</span>
      </div>
      <img
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhIVFRUVFRUVFRUWFRUVGBUVFxUXFxUVFRUYHSggGBolHRUVITEiJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGi0lHyUtLS4vLS0tLS0tLS0vLS0tLS0wLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIARMAtwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYBBwj/xABGEAACAQIDBQUEBQgKAQUAAAABAgMAEQQSIQUxQVFhBhMicYEyQpGhByNScrEUM2KCksHR8ENTY3ODk6Ky4fEVJDSjs8P/xAAaAQACAwEBAAAAAAAAAAAAAAADBAECBQAG/8QAMxEAAQMDAgMHAwQDAAMAAAAAAQACEQMhMQQSQVFhBRMicYGh8JGx0RQywfEjUuEVM0L/2gAMAwEAAhEDEQA/AMrAaIQtu60MiNXsILmsGqOK0GlaPAC7CjMulqCYBrMKMPc2rA1I8YTLMK2Rewp/da2qqz2YUWwlmrPeS0SitRLZq2AolVfDqAKmDU/phtZBStQy6UjT0FMqRaap5Qyn0qVqVMgKi5XDTjXLVMLkuFQOamtVdxS9c2wrtCawuTbdwqCaOpwbVFK96zqu0gzlGZIKaE0rK9pkuwFa0nSsr2gU5r0JkNqtjkiCSCgE+EGSsbtqGzGtq2I0tWf25CDet7Q1HMf4kvVAIWImGtKpsUljSr0YNkiUXheiuzjrQOF6LbON72rMrtsmWFaXZ2Usbm2mnU1o4EFhWPwEtnF61eHnFhXndcwhwTlMrm0UswohsEksRUQTOwBopg8IEvas9zxtDSFdEg2lOi1puW4qeBbU7SaXOAOEs4gBOAp6ium1dFaLWQUKV2kK7XRRwqppppqS1NcVxbAXJoFNZKeK5ehloi6kKliBVYmiEy3qjItY+pZtJTVMpjPVbHwB7m1tN1WVQmnyhI0MkrqiKLszEKoHMk6Cs1rqjzDenz3V3Oa1ee7SwhUmwrP7Rk51pdsfSFgjIsGGgbEu7rGGv3SFmYKMpILNqfs2POhfbnBCKQha9XpmVWForNgnHp0yPVKuqNdO1YLaW+lUeMOtKvRMs0JN2VNFJWp2VGuUFSSSt2vwa50HyrGQvWq2PLZaT1jDtsjUjdTSzWatFs7EkoOm/wDjWWxh8Va/s9s8lQ3T+RWRrSxtIOcmKcyimy8QS4rSRS60I2DgMrXPAkUa7mxNecr/AL5pjFvVM2iCiEBFqfVNDarKAkX5VqUKu5sRhLObBUi7zT1riH5U9BT9NswhFOtXRTudctTeyFSU2mmnkVy1Q5s2UymrUMja1K50qs1J6h0CAiNF0+mSQg2sPOpoloftDHEkxQmxGkkuhEf6KA6NJ56LxvuICwOYS4wPn9eqmTMBNxeMCHu41zycReyoDuMre70GpPAWuR4z9LZxAxKLNM0kbRh419lFYHK4VB1sbm58Vr17BBAqDKo03nUkknezE6sTxJ1Nec/S/gmlkwMca5pJGmjRR7xJht6DnwFzReyqrW6trWgAeLMTgmemP7lRXp/4ySboP9Euxe8xLYtx9XhRcX3GZgco/VF26EpVztdje8kY+da/8lTA4NMFEQz2+sYe/I2rt8d3IADhWC2+Mhvv5ab+vUU2K41GqL+GG+Q/OVRrCxiyG0WtSqptObMdedKvQNba6WKesnirWbKQlbisMZfFXonZSZe6e/2dKS15LaUgckSjcqONby2Nel7ByiMAcK8qhmJkv1r0LsS5bPevP9sUj3Uk4/pOUTda7ZsgJFEJkAN+dAcFEyH1NFyxYZvjWXRqt7tzIkzIPSIP0+3QFEe07gVG7a0QwguLULzHdz3/AM+lFcENBTHZbg+tb58z6qlcQ1dUVKK4BrT1/Gtqk0JYldNIU/JXQlN90ZQ5UZrlOxEiIMzuqDmzBR8TVH/zOG4Txt9w5/mt651JwvCkOCssKiMW7rUTbZw3GeNfvtk/3Wpm0NoqsYMRV2c5Y7EMt7asSD7KjU+g3kUrWoSJOOfAfArB/AKvtTFsW7mM2aw7xx/RrbQD+0I3chqfdDQQxBQFUWA3D+d5603Dw5Ra5JJJZjvZj7TN1PwG4WAFTVg6iv3jrY+XPyydp09o6pUPiw6O/wCWst+7R0w5P2XtnlH3sqgfoi/vaTxQ9+SP6EGzn+tI3xjmg948fZ+1VzHMCCOFiKG8mi2eJt5Dj7e3mYgneYGF5NtjazCRix1Ym33bkH4/xoBtrF95bXcNOnH95ol2swZ7xm6/9VmsQ2XfXqtKxjw17cpWoSJBQHH6GlTsatzdgQOGmp8r0q2BhKFUXOtajs3iTkkF9y1lWOtaHs3qsn3f4ULUCaZ9PuFZmVs+y+A7yFpORtXonZPZZjUm3tVnPorw4bCkNxeqfar6T5opHw+FgERjJUvMpz6aXWLQKDvBN7jhXldTQ1Gt1FShTwDfysnBUbTYCV6kuEpv5dh0JRpkvxQMGb9ga/Kvm/anaPF4j8/iZXB93NlT/LSy/Kt99EnaNcv5DIbEFmg4ZlPiePzBuw6E8qIexv0VM1v3EZHTj59RAVRW7x20mF6WNoxe6krf4Tr83CirKbby7sNOfLuB+MoqClWfQ1XcGabAPqf5CYNAOySrC7e54acf5B/CU1Ku3YveWVfOJ2+cYYVSpU03tWqMtb7/AJVDpW8yrsvaLDiyo4eQ+zEpGc23kq1sijiWty32FUJsRPJ7cndr9iIkehlIznzXJSIvvrtdqO1q1QAM8I6ZPrw9I8+Us0zW5uoI8HGDmCDN9oi7Hzc6n41YrlKstxLjLrnrdMC1gu1WbBRls+RQ/wBsDK3lmGttBpVilXDw4XG6jnlCKWIJA1Nhc28hvpmCwz4gB2ukBAI1s8wO7d7Edv1j0GrWKWy5u7fuT+bkzGMfZkALOg6MLsBwKvzAD2h7svIcPFHh5T5c4x9phAr7g22OKvZgq5FUWsAoAsFtoABwoVj3te54H/mik4tc/DzoHtOIlD5Unq3nwh3wT5Xk3zgBWotHBYXbmJTU5QdTvufjY2NYHbOOOuUKOoVQfQgaVr+06ZdBxrE4yLWvU9mMbsDktqCZhAHYnUm55nWlXcXoa7W4EmlsyDO4WjPZ5wjSqeVqh7I4HvZZPGq93C8viNs2UqMi82Ob5UzFYkviJHCqmZr5UFlG7QCgP8ZczoFZthK9c7DgjBMV08e/lvrZtgoMXEoxUEcunvKGt1U7x6Vk+w2mzTfma02z5QEXzFeD1tZ7dRULch5x6LTZTDmDyQHaH0T4CQ/VNNCeSv3i/CQE/OgOJ+h/EIQ+HxkZZSGTOrxEEG4OZc2o8q3+K2gRNHHceIG9GBiDantN2xqGghzzzEibTHVAfpggOxY9oLGFxeHV3GneQSRlXH2mSQoVPkCPLdRH6zjBMP1A3+0miGHxBtrROLEDTiOdH0tDSam7paehAHWxB/AUOqVWWys4Gc7oZj/hkf7rVSx2OljZUOGcM4ZlzvGAQpUG+RmYe0OHOtqd/Q1ntpi+Kc8o4lHQ5pWPxuvwo2q7Ooaei6pDiRAueZA4Ac+amlXe94BVXClyt5AoJ4Lcgep31PSrIfSjtGSHAt3ZKmR1jLDQhSCWseF8tvU1jUaRr1W0xbcY6BNPdtaXcloY9r4dpO5WeIyf1YkQvpv8N71dryHsd23wuE2bPhHwzNK5cqyhMrlhZDI1wylNNwOgBGtej9kcY82Cw8shu7xKWP2ja2b1tf1p7tDs39I1rg6QTGI68yg0K/eEghF67SqticbHGyK8iq0hyxqSAXbko4nWswAkwEwmY3ESi6wQ99IqGQpnEfgBAspIN2J3DQaG5HGjszbCYzDDEYe9wQyq3hZZYyG7txw4A8w3WgX0jpi4hHjcFI6NGkkUuSxJicqc1iDcArrppmvpahH0KK+XEtr3RMWU8DIA+ex4mxS/pWsNNS/QjUsPjaRN+MxEfQjolS93elhwfwvWpJVkRZF1VlVl+6wuKH48WU35fjurmy8QMssFwTE1wL6hJLulxwAOdQOSChe0saTdQOlZmsO6pA4weVs/j0RKAIF+C8+7XS2espjNa2/arYsjWbKaxWMgK3BFen7Oc3uW7Slq07ispjvartSY9Na5W4MJMqbs+frhVnCx3mbzqpsE/XLRDBi0pP6QHxGlBcbny/KuF6l2fxITCGPmaM7DlZtDuBFY/Yk4KgdRW72Agy+teK7RaKW8kXJlatK8eSnx+GtKsnAUdwzgioNowr3dgc111HI9KZsqBlQDfpoeYpFjXNcAYJFrXEESMW+XUkgtlEsNEWBtVqOMqLHeKr4RioNzV6HXf8a9BoaVMsaRIdF/g+6TquMnkrEO61Z3aH/uJPKI/Jh+40dadEDMzqoQXclgAo5sTu9aCbXW2KJ4PBHb/DeTMf8A5UrR7Taf0LrY2/TcEPTn/KPVR0F2ucHio3wss0bB9MokTMGBuCuujAgfCqHbLGsMkKmysC8ltLi9lX7p8V/IDcTWYO62luXD4VgabRlzRU3QeEff6rdoaI1mbiYHlP8AIU2G+iWMSXkxLvGD7AQIxHIvc/EAelejQRKiqiAKqgKqjQBQLAAcgBWf7HY1mV4mJPd5SpOpyNmGW/GxU+jAcKPzwBxY3FtQQSCDzBFV1teu+psrOmMWHHjAgYSXcCi4tAupaCbY7U4bDOscr+InUKM/dj7T23Dpv13WvWG2/tfHiebD9+4VHIDBUjJQ+JPrFUG+Vl3W1vQIbKY63JvqT3ZNyd5JvrTum7I3AOqOsRIA6jr+DKMyk54nh6f1917HDtiBwCk0b39kIwYk8go1q4BavNvo2wJXFSMbG0LC46vHvHDdXpdZus07aFQ0wZ6+aoQWkgrFbEx5jxxLHSSaaF/WUrF5kMqKOhNa+aWFXIVDK4NiqAEKeIZyQqnoTfoaxW18AVxYTW0ssUi2JBs8qmQgjW4bOdNRcVuI4woCqAANAALADkAKPqzThjokwPL5wi2Mq2oaCWFpy0T5iW/x7KnMMQVNzG3vd3kvY/1aPceG1hmYXvc6XAGC7d7LUqZUUrYsrKbEgjqNNxB9a9MrH9sgoLnTxRqH8NspUtlu3vEhjpwCjmLn7LrE1w2OfD8D3PqcJKvTAbIXhWP0NdqTa6XY250q9cMLOKHYaQqwIrZ9ntl99HJzzIy6akqLMLcrNf0rPbC2Z3rAb7kAAC5JJsAAN+pr2/sbsP8AJ0ObDMWO4s0ar6+It/ppLtGsKVKZANoBIEwRz9JRaI3Ows3snZLqvsm962WxcBKLXU2uKMIZfdSCP0eb5+C3zp5SU7538lWNR/tLD415PU1u+ncR7/iPdPtDm4CJRYUe8L77V1JI4xaSRE5ZmVfxNCDgEPtZ36PJJIP2WYr8qkgwkaexHGv3VVfwFCoupUi0tBMTyEzGSJJx6e6403uyUQba+G4SB9/5sNL/APWDVfE9oFyFIFlMrK2W8TIFsQCx74KCBmGmp6GuVQdMuIDGxzoVUnejL4iq9GAJP93rfSztPtFzXbmMEwc3+0Y+XzQ6ccSnrs9L5nAkfMXLuqZib3HsqBYWFtPdHKo5Y5UMeX6yOIMoTQOqNl8KNcBgCiWBsbA6nQUQrlJN1NUbrzuzPH4byIgyREo5pttbGFmu0eEM6rNDdyl0ZACGsbH2DqGU+6bHxHjYHKg65bkt9kAlr8su+/S1ei4jCXOdDkktbNa4YDcsg94fMXNiLm7sLis11IyutsyXva+5lPvKbGx6EaEEBmjqzTZESB1uPYyOtvpCboax9FuyAfnyyFdltmNErPILPJl8P2Y1vlB/SJZifQcKPUq5SVSoaji48UFzi5xc7JWb7RYFRMs2UHMO7JtuZblD6gsL/oqKpVq8ZhlkRkbcw4bwQbhh1BAI6isvLhpUORo3ZtwKKSr8jm3JfkxFuo1O/wBmaxndd28wW4m1v+ew8ij0KoA2uKIdm4vHM/8Adx+qhnPykX4UfqlsrB91GFNi2rORuLsbm3Qbh0AqXF4jIt7XYnKi8WY7h8iSeABPCsbVVO+ruc3ibegA/j6XS7nSS758hQSxiSdNAe5u17aiR1KgA8PAWJ+8tX6r4ODItibsSWdvtMd58uAHAADhVigOIwOHz3Mn1VWprGwudANSa8s+kbaRVQNzSXkI3EBgAgI4EIEB6g16Tj7NaI7mu0n90lu8H611T9cnhXh30hbSM2Jc8Lm1bvYdLxl55fPnRJ6t1tqzgbNelSiXSlXpEotD2IwLNLkUhjYnwOrMBuzBQb3F7236bq92wE5kjVyLEjxDkw0dfRgR6V8/bP2XisLiFZopFsQQ6+IWva4dLgbjxFe6bDnJBze+BKPM6SD9oZj/AHtYfbjN9JtQQY+xsfO8e6Y0h2uI5orSpUq8wtBKlSpVy5Kq2PiJS6jxoQ6dWX3b8MwuvkxqzXGYDUm1SDBsuIlNglDqGXUMAR5HWn0Nw2JVZTGD4JCWTkJDcunrqw65ulE6l7dp+fLY8woHVcqvjMNmsynLIt8jee9W5obC48iNQCLFdqAYuFJEqDCYjOt7WIOVlO9WG8H5EHiCDxqamCIBi3EgA9bXt66n+RT650TZQEq7Ucqkjwmx8r1UImJt89APjVmsniFZX6rph/GXY3O5RwReNupsLnoBT4Iso33PEnjUlVmJhQRK7TJZAqlmNgoJJPADUmkrg313Gx6G1/3iosFH375v6GM6H+tkU8P0EI9WH6Ot6VIvdHz++Sq94aJQzbU5hwskrjLJMBod6IAciHqLkn9J24WrwPaT5pCepr2n6QJi0ZA6+leKYuMhjevR9iO3U3O5n24JHUCCJVFprUqryClW/CVX0pDBFjoRJNhypjUlJkbUA6uqSxkOpG+2l+tTYSKMQJNDiGnRG9ppBKRHJZXGf7IOR/1K8p2b9JcuDX6jDKoLAAM7NmsLtfTfqo9a2HZftzhsRIY/yJIElXK+Qr4ma4a9gNLG1ebqaSsKf7TGCJFxzEE3AseNrEpw1GkyM5W7rlVsA5KWY3ZCUY8yuma3DMLN5MKsk155zS0wU8DIkJU13AFybVUxOPC3tbTeTuFU4e8nN4keS/vDwx+YdrKR92/lR6OmfUNguJDf3GFamx/BR6n+FVHcnUm9E8N2dJ/PS2/Qh+YMrC5Hkqmg8kEazSmJQqgiIG5YsI7hizMSWOdpBcncBT36VtNhdInlk+pwIF+J6KrKwc7a0eq5LGGFj8tCCDcEHgQQCD0ohsvHFxlf2gSA1rLLltmdOFxcBgNx6WqhITayi7MQqDm7EKoPS5F+lGO0mzyuGgwkL5WzBu9I8S934nlFveZ2W+64dgdCaJT0ja1F73mA3B6/jH1HJUrVNr2tGT9lYrlUcLiJFOSaxPCRRYP5r7p8rjy3VbaRQQpIBO4XFz5DjWO5hb8+fnmAbIqfSpUqquSpUqVcuSpUqVcuQ/A7MknlmUnJCsozEGzSXijORbaqNdW0PLXVdE8MaR5c6oMtgBYAACwFuA4WqjsdwJJ15iKT9oMn/wCIoZtrEbwRc20rUq6ilSpU4YCXN5nOCbR9Pfmq1jnvMnCzm1nD3HU15j2qwoRjavSMTGd/U1532ve7GmuxhteGg2U6nCyFKkRSr1CzlDI5J1P/ABWs7J6Pmvotjp13VkH30Z7P4l1bwsRbkT+FUqglhhS03X0BsnHZgJEVnzqAwQXIkTQE8sy6XJAHdjnVxsNNJ+cdIF4LcSP62OVT6sKw/Yva5EeT2Ga7XFxfXRbel+WulT7Vxsyygsbgkagg6H8DXk61I/qHBoE8zf2x7LQYTtzZb3B7Nw6EMV71vtSEOQear7Kn7oFEJcdyPlegmz2zC/A7r8iAf3irrOq6lt1rD/ncKy26vUO/xlwt1j+foLmYgZVzSbM5V6WcRxPKdciM5HPKCayOHQhQCbtbxHmx1Y+pufWi/aLaKjDKGZUWWRFuWUCy3lIJPMR5f1qFRy5vYV36pG8g+KAitNrZpNFMHng+U8TmV1GGlxcY4ZCsbIxUK4nNLIo7pM6rvYu+ZAVRbsbKJL6e+KIybRXETs6ZssaKgzKVOZiXfwnUCwi32rP4rHpGGMhKZPaDqVI9jgRf+kT41W2XBMmLdULC7RyYgHVVzwRnK36QBVRbXw33A01ULzpH0tu0CJJmSZmOXCPoFDqY7wPmZxygD3WuJrK7XKPL3ySKcuVA4IIUgNJe4+yO8a3MCtPNCrCzKGAN7EXF+BsdKDbRAaZ0OoCxtbqRIn4X+NZGlO10jl/In28vXgRzd1kXweIEiK+641H2W95T1BuPSp6A7MwwLSBTkkDBwy7yr3PjG5xnWTQ89CDrRXCYgtdWFnU2YcNdzLzU8PUbwaHUpgEx8nHz2uFIPAqxSpUqErJUqVKuXJkDZcQh4OkiHqwKunwCy/GmY/CF20FzTca+QLLp9U6ub8FvlkP+Wz0S2rOQhGUAEb6M9jHU2ve6NsiImZvnAzEkIMkVLcVmcfgcoPeMqLrc3zHyCg6mvPNtYPAuxDSzo2tiUQr8jf8ACtD2ixtr25mvP9o4i7G9bHZVEjxCRPX/AIPsh1yMFDZdlwtJ3aYkB/7aJo0Ol9HRn4brgXpUNx2KfcGYW3WJFuYpV6UNdGUjI5Ky3Z4DfjcH/mufwQ1b2Vs9EJtjcOdPd/Kt/pBWXFGtg4V3bKilmO4DedKo9jtplx+jfwuBE2C9F2ScAhum0WJO8NhJRrx1vr8K0aRxm2WVJ9QVTu5EsdLkarw4A8NxtWCw/ZRkUM86RvvyOCB+qwJzfC3InfWu2bOYQixBpGzAse6LEjgqrrYHiTr5Vja1jP3NuefyB9U5SLsFejYaYxoB3YBA1Gtgd9t/WuR4hpf6BCP0hp8zU2HmkCBpB4rXyXy2+9/CqEEzO95XUj7KMdBysBasl9QsAYXmP9S1rYHVx3fTaXc4JhFABJMDzufZGMEhABdUS3I/gKKg8taFQ5dyJv3Ekk+duFXH8SsuaxYEAjhcWzVt6Ata2Bnnn3LWg8IhvqZSlYSZ+fyvBNt7QaeeWXNcNLIybiAhe6aHQ6Bd/Ktx2D2i88UrySGR+/OZiQSfqorbtBy9K0GyOweBgAvH3zADxTEPu3eCwQfs0ztJD3eIRl8KyRZQF0AMTHlzEo/Yoeuo97QdDuMx6/8AU22uxzmta3pPon4nEBR14Cg2Txl+LBQf1SxH+804mlWLTZsCahQ94UmjYcQyHqbZxf0V/jRxEDMJBvylfMEg6+RB+J50Ax2gVuIkj/1OEP8ApZqK7Omscp47vOorNlu4ZFvyquEojSpUqSUJUqVKuXJssYYFTqCCCOhFjXExbHCq5OZlBV77maMlH9CVNSVWgP1WIXgJWt+tEjn5uauHkU3AHkfof+oVQXBXn22toYF3Il71bH3AfgRqD6WoRg9hYOdyFxaAH2bsQ56GNgD8Kh7R4Lxk9TWJ2qCpHCxuDyI5V63R02uYNjiEpUdBuEd2n2ew0bENiCxzH2EdrAcL7r7+dKs9idqtIPrVV2+22bN1uVIJ9aVaLabou4oBcDgBaLsz2Sw2IBd5nEa6s/hSw35SpzG9veGlaCfaqYQZcGiIrAhXC6kXsSXOp+PnesHjNttZY4B3aI2ZbanOL3Yk7yb7/LlWiwuOjxEKRSqFc3dHVwmZ92RgVI8RO8bjrY60tqGOs58ls45DmcTCIxww3KubD7RSwlguRmdszSOgeS+g0duGlbCDbeJEL4lpGItkiAsq9429rADRRc+dqxGwIWlmCLCEVSDK7DvCicSzN4Bpusovwo92lzSKkjXsHAVeCIDoBSOop0hWbYSURhdtW62SrGHxEsSN5JJJopszZhUAucvQ7/hVPYYJjW62Fhv0o1G6ncfhXmaFJrnu7wZNhMf2PUeqcJMWRCAoBbnz3mkcQBoooScZ4j8K7DPcaHfWp/5ZgAbTEC4EDhbHQ/XnKD3ByURjxGvCodv4Qzw2TWRCHj6sAQV6ZlLL0zX4VWRzwq3hpLVfSa1zxBEg591WpSi4ysjHIGFx89CDuIIO4g3BHAinUd2tsTOTLAQHPtodFkP2gR7D9dQePMAGYq2R1KP9hxYnnl4OOqkjrVKtAski7ef5/OEzSrNeOqoSz3URsR3meNSOLeMHOo5FQW6WI4GiNK1KhEg4RQIRDD44bm+P8atrIDuIPrQSlS7qDTiy6EczjnTTKv2h8RQWlVf0/VRtRtXB3EHyNQQfmsQw1zStb9WNIz/qRqFPNk8Q1ItYDezE2VR1JIHrV3bJMGFEZPisSxHF2JZyPNix9ah9LY3nNvdBqZA9V5t2pzJIQVPU2NqwO2WBNajtZjHJIbW3sk+0vMX4jod3C1YjEyk167QUttMFIVnSYVNxXa7alWil1qcF2SOLJ/Isz2sWBsABuuL2I9d9a3C/Rli2EayCJUXViSrO/QeEhb7unWsLsntdicK4fDtkULlCHxqQdSWvva+t/wB2lGNrds8dNEpfFSC+8Rnuh5fV2NqTqMrkwCI9/sjtNOJIRT/ysxn/ACeRVjEchDxobgupIzFve5+p0Fa7G4cNECxCLcEM3H7oGreled7H2lHGVMcWaQgF5ZiHs3vd3HbKNfebMfKvRYNlzYiJZXcIhsxkkb3ef/dqyddRiowxEffnx+6PSdIKZh9t5ny5nPDM5F28lGijpc1rNlzhtxPXTQet6x2LwkKyp3Mmew8TWsCb+7zo1hJWBtc2Gtr6A23251i6unSFwOGEw0lT4icBmUMSSRfh/Iops5tLUBw+EJJbcL3ufnbnR3BuAun/ACf4UjXDXWGEQIkp4VKrVUEumnGnCStClUNNoPH5A6wOKqQrqy2p+IZJFySIrqd6soYH0NUi9cz0y7Ulp8KGaQdlcm7OwnWOSSPoGzr8JL2HQEVSm7Pzr7LxSeeaI2/1gn1FEjLXfyk86LX1DATuZPt7i/uoayo3Dis3iVaL88jR8i1sh/xFJX0Jv0pVrosZcWOvCh82w8O1ygMR/sjlHX6s3S/XLeocym5oc0wDzv8AbHurCu9tnj6IDTZHCi7EADiaikw7hnXvW8LsoOVL2B8JOlr2twoh2dwi55JHu5TIFZ7HKbMWKi1lNiNQBQHAMBJOOU/zCK6pDZAypNl4I3E8wyhdYozobnTvHHA23LwuSddFq7bxeclTqOAOo/nyru1doMzdBWJ2vtu0tv530pRbV1NSRYAYQsXdlDO22BBPgIDHcrEC/wB1zofW3rWJOzO6VXnFmYtkhNwxscpeTiqXB03tbTS5Gr7TbQDkBhmXQkfjY/zehW1tsd4ihggyXQKFIGQABcuhAI5HTU3G6vV6M1G0mNjz+efkk6u0uJWWn0J/6+A4Uqbi3uf+LfhSrUCXKrVaabwgcqq1YjiuKgqEY2KbkVqsfjJHiSIF2sfClyfgtZXZThRei8eLLCwNh04+dI12bnhw4I7TAhF8LtEiVFbLcDXKwYX8wSL9K9B2bOLZrXryXZ0J7wHrXo2FxBVFCjM7EKijex/cOZrF7R0u9zW0rk/PICJJJMACSmKb4BLkVfEnOCSLfu5VYinu1x6WoSZrg5rZ1JRlG7MN5vy/nhVzDvrWNqKHdO2PsfboRzBBkEWIghHY7cJCKiXT+dKlSWhwlp/e1ekzjyViUQ72l3tD++p6S0dtPcY+QolEHlphlqmJtK6stEqs3utxC6VcSar+zp8xsazgmtpVzB4vKb9aBSqgC/AGQucJCh2rEVnlOgBkjJv9lolFx6o3wq5sMf8Ap5H4u9/VUSNh+0jVF2jwsstmgQOXTI13ChSocxtrwvI17XOg0NWJrRQpFcEgeIjix1c+rEn1rtQ9rqUtMzAHlAyhBxMNPBZvFy771idr4MM5a5B4aXB87aj5+la3HkNck5WBtr72/wCenrehbRgg3pnRO7nxDKs8bliMbGc1jQ3FxVqdo4W17brk2/fWa2hoK9Hp6gcBCSe2EAmFKmStrSp9AXcPHmZVva5Avyr2bsn2DwhiWViZCfLQjgb/ALgK8jwuzHZDISscY/pHJClvspYEu3QA242rb/R/2kKzJ3h0tlP3Ta5PqAfQULUMrVaD26Z+2pkQASYB8Mn9pNocLzbBKkFrXg1Gy3j069fI2Wx2n2UwUgkiiyiRASVG/TfY26jdXn+w8OFkYSqzKrFdxAax33tYV6V2jZIZS63D4hRGX0yqu5rc2Pyq82zmRmFohhrLfNvVVHi03EtxY0hpO0mUaFOtWJeHjc3e4BxiBUaHBsuu7wD90tdBu3cSppy5zmU4bFjtFhN2mOFh4otcdYrydmoVct7ESx6G/vG+ZiTwAtQvD4RFCyvJKe8ukSRjxMoNi1iRa9wLcdKu4/a0aQwRYkMUkQNmDHMLHwX56WN70+PFrFHmCrNChPdurWkTvN6sDqDrv0OtRQra5tOahc907Wk7Q1zRLYa9xMPe8DcHEEtHgkhql1OiT4QAMkXkEwbgDAExE3zF1TSEHFphxKWRQ2bKAtrC9iV0uCLaczV/F7JWJJpADmWRWRiSTkGQnz1zVQ2ZtuF8RmdVgESFUUe8SBoxG8WPTWrGH2536BWHhUxd8ea52DXt7uiX9atWGvZVpvpAimG09+PEXPLiQWw1xfAB2mJcGk8VVnclrg6C4l0ZtAAi8uEXIm9i6FWlndpogrOsbHKWCi12Iym7CxG+iEizrN3AyOSmcMbpoNNd/SnzwWEid+Je+Ld1EuW5Z9zFhrlUa8gB5VdnxAWNsRvZVeFTzIkyj4sBWcatOm2kylTa4EFjZFy43Y4nbTd+4uaYhtjEwYZawy5znEXkwbADIAkjAn/aTeJQ3D4kte4tYlTrfUGxseV71Z76hOHOVQvIfPian72l3NYajhT/AGyYuTa8ZJN85KK0naN2fn8ogs1dEtDxNXVl4V0Cw+TlWVyWTWuCeqQlvS7ykHskkjiplE/y9huJqhiMabm5qJpaq4yS1RSoCcLi5R7QfMpPEanqKzqbY8Vj1F+dt/rqPiKtY7GXUisxGCrENfI2/iVOtnXqL+oJHlu6TTgtId6Jeo+MLRYrFBhWV2nrepcTOyMVbpqNxBGhB4giqs73p/T0e7Qnv3LPONaVSYldaVaCXUmOx0krZpGvYWUblVeCoo0UdBV3BYqKNVazNLf7qRi+8WN3aw42AvxoPTlNcLRFoUr1LbHamOfCxx6mSMasDfduHyX4VSi24ThSJJnY+ykWY2HIkchWMwJ8Jqd5rAedUJLfDS8I3F1uZJJzMXJxHLCmxu69oWkxuIlmUd4xYKAFHIDcByFSbNUqQuY3Hta6fd9Px8q5hJwEB4keH95pQSgNSX6qsCS0keXyOfDJlF7thsRKO5ha5seV9darReE3jdoy2rZTYG/MfOqs2JuNKhw0t6To76Ulhj5xBsUV0Oyi+HUqwkjcrIoNmAGpO8n8KvJtaRoEgeMgoxdmuCHNywA/Wa/pQmCSrYkqz9VVd/7IcZkE5B8VwRH+zoBkAmQAoFJo/bb7HH4HXqrcc2g4dOXwqUS0PElPWSkmNhyLKurJTjJVESU/vKqW2UyrySfKmtLVUSUzPrUObIHz5ZdKs99rVfGPcVHI9qrSYjnUtp3ldKDzt4vWrr4dSvDdQrHTeK9Mj2lwrSNJxaC1B3AFDNog57XOmg6DfYepPxpnCpZmzPUeJ0rQbgBAQ7FJXKZiJqVGAVFBFOyjQ215Dlzp4x8n2vkP4UqVSoVzB46TKfF8h/Cn4rGvZfFx5ClSqvFSERO0pbr4/dHAfwqxJMS2/wCQpUqWeihWYd1T4WlSpZ+CiBXIqtClSpQ5VkhUi12lVR+4K67TqVKquyVy7XRx867SqqlMm3UJx26lSolHIVSgUvGhrt4qVKtmmlnqSLEsXF7eyg9lRoFtwFLaUptw+A/hSpVb/wCgq8EFlc3/AOBSpUqMqL//2Q=="
        alt="img"
      />
      <p>
        Temporibus dicta sunt necessitatibus excepturi quam et cumque
        accusantium reiciendis adipisci quos. Magni fuga atque minus laudantium.
      </p>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook"></i>
          <i className="sidebarIcon fab fa-twitter"></i>
          <i className="sidebarIcon fab fa-youtube"></i>
        </div>
      </div>
    </section>
  );
}